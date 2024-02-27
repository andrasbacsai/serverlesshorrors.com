---
title: $3,000.69
description: Attention Vercel users. Be careful what you test or deploy to Vercel. I decided to try out...
tags:
  - vercel
  - bandwidth
  - wrong-implementation
author: Andras Bacsai
authorTwitter: heyandras
date: "2023-04-05T12:34:56.789Z"
image: https://d3e0luujhwn38u.cloudfront.net/resized/zQxF_Te5KKnxqrv-ydrJt1v2mc5g-QgZoIIF6oCgyL4/s:1200/plain/s3://typefully-user-uploads/img/original/10070/21e2a26c-2e49-4162-9e5c-77bacb4efa9e.png__edited
category: development
---

--- 

Original post: https://twitter.com/shoeboxdnb/status/1643639119824801793
Conclusion: Vercel CEO confirmed -> won't be charge.

--- 

tldr: Error in the code caused uncaught exception which caused subsequent requests to fail and retry, which caused a spike in bandwidth usage ($500 / hour).
