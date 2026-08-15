---
title: $25.42
description: Promotional credits hid an AWS CI runaway—305 large CodeBuild jobs in under six hours, plus five EC2 runners left online and a $20 monthly budget already exceeded.
tags:
  - aws
  - codebuild
  - ec2
  - github-actions
  - ci
author: mlsniperpro
authorTwitter: mlsniperpro
date: "2026-08-15T06:00:00.000Z"
image: /assets/aws-codebuild-25.png
category: development
isNew: true
---

---

Conclusion: Caught before the promotional credits ran out. Five persistent EC2 runners were terminated, the GitHub webhook was disabled, and the CI contracts were changed to reject persistent runners and jobs without kill timeouts.

---

__tldr: An AWS account appeared to owe almost nothing because $25.42 of promotional credits exactly offset $25.42 of August usage. The gross bill told the real story: a GitHub Actions webhook launched 305 `BUILD_GENERAL1_LARGE` CodeBuild jobs in 5 hours 41 minutes, billing 745 build minutes ($14.90), while five EC2 build runners stayed online. The $20 monthly budget was already at $25.42.__

---

There was almost no application traffic. This was CI infrastructure billing itself.

For thirteen days, gross usage sat near $0.56/day. On August 14 it jumped to $18.01. The CodeBuild project listened for every `WORKFLOW_JOB_QUEUED` event, and normal CI, security, contract, release, and deployment jobs all selected the paid AWS runner. Its concurrency limit was 15.

At the same time, three `t3.large` Linux runners, one `t3.xlarge` runner, and one `t3.micro` runner remained online. Including their gp3 volumes and public IPv4 addresses, that idle baseline projected to roughly $345/month before burst CPU credits.

The configured CodeBuild ceiling was worse: 15 concurrent large workers at $0.02/minute meant an $18/hour burst rate. This incident did not reach a million-dollar exposure—the account quota capped this particular failure mode—but it could still turn a forgotten CI loop into a five-figure monthly bill.

The containment:

- Terminate all five always-on EC2 runners and their root volumes.
- Disable the CodeBuild workflow webhook immediately.
- Move normal CI across three related repositories to provider-managed ephemeral runners.
- Reserve CodeBuild for deployment/release work only.
- Reduce CodeBuild from 15 concurrent large workers to one medium worker.
- Expire queued work after 5 minutes and kill workers after 45 minutes.
- Add repository checks that reject persistent runner labels and any job without `timeout-minutes`.
- Add an independent 45-minute shutdown watchdog to any future one-job EC2 runner bootstrap.

The lesson: always inspect gross usage by AWS `RECORD_TYPE`. Credits can make the net bill look harmless while the real meter is accelerating underneath.
