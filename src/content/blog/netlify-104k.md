---
title: $104,500.123
description: So I received an email from Netlify last weekend saying that I have a $104,500.00 bill overdue...
tags:
  - netlify
  - bandwidth
  - ddos
author: Andras Bacsai
authorTwitter: heyandras
date: "2024-02-27T12:34:56.789Z"
image: https://d3e0luujhwn38u.cloudfront.net/resized/bpWZOoDelLipC_FS9mD8jWkdzcNoAuzStEXgCRtQgMQ/s:1200/plain/s3://typefully-user-uploads/img/original/10070/bc660b5e-cc2c-474a-90e8-e1608d0fc4db.png__edited
category: development
---

--- 

[Original post](https://old.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/)  

Conclusion: Netlify CEO confirmed -> won't be charge.

--- 

__tldr: DDOS attack caused a spike in bandwidth usage ($104,500 / 4 days).__

Quote from the victim:

> So I received an email from Netlify last weekend saying that I have a $104,500.00 bill overdue. At first I thought this is a joke or some scam email but after checking my dashboard it seems like I am truly owing them 104K dollars:

> That's 190TB bandwidth in 4 days

> So I was like 😅😅😅 and think okay maybe I got ddos attacked. Since Netlify charges 55$/100GB for the exceeding bandwidth, the peak day Feb 16 has 33385/55 * 100GB = 60.7TB bandwidth in a day. I mean, it's not impossible but why attack a simple static site like mine? This site has been on Netlify for 4 years and is always okay with the free tier. The monthly bandwidth never exceeded even 10GB, and has only ~200 daily visitors.

> I contacted their billing support and they responded me that they looked into it and the bandwidth came from some user agents, meaning it is a ddos attack. Then they say such cases happen and they usually charge their customer 20% on this. And since my amount is too large, they offer to discount to 5%, which means I still need to pay 5 thousand dollars.

> This feels more like a scam to me. Why do serverless platforms like Netlify and Vercel not have ddos protection, or at least a spend limit? They should have alerted me if the spending skyrocketed. I checked my inbox and spam folder and found nothing. The only email is "Extra usage package purchased for bandwidth". It feels like they deliberately not support these features so that they can cash grab in situations like this.

> The ddos attack was focused on a file on my site. Yes it's partly my fault to put a 3.44MB size sound file on my site rather than using a third-party platform like SoundCloud. But still this doesn't invalidate the point of having protection against such attacks, and limit the spending.

> I haven't paid that $5k yet and decided to post here to hear what others think first. And yes I have migrated my site to Cloudflare. Learned my lesson and will never use Netlify (or even Vercel) again.