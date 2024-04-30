---
title: $1,300.69
description: Imagine you create an empty, private AWS S3 bucket in a region of your preference...
tags:
  - aws
  - s3
  - security
  - ddos
author: Andras Bacsai
authorTwitter: heyandras
date: "2024-04-29T12:34:56.789Z"
image: https://d3e0luujhwn38u.cloudfront.net/resized/lsRq0Mpg3hd4kmwUyrzmyWyOZiPyeANR7LPL9ZQ1uTk/s:1200/plain/s3://typefully-user-uploads/img/original/10070/6e13f962-8316-4378-b823-0587b4939835.webp__edited
category: development
---

--- 

[Original post](https://medium.com/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1)

Conclusion: Never let your empty, private S3 bucket alone.

--- 

__tldr: AWS S3 charges for unauthorized incoming requests, so anyone who knows your bucket name, could ddos you and make your bill go brrrr (huge)!__
