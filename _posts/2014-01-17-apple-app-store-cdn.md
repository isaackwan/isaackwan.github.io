---
layout: post
tags: apple cdn akamai
title: The stress test of Apple's CDN
---

So.. I just wanted to upgrade my Mac's OS X to the latest version, 10.10, which is just out yesterday. As usual, after running a `brew update && brew upgrade`, I performed an update cycle to update all app store apps to prevent potential incompatibility problems. Although I do have noticed a slow download, I didn't really pay much attention to it since I wasn't free at that time.

As things go smooth I then decided to download the installation program. Except that the download is painfully slow, estimating a complete time of a few hours. No, this should not happen at all -- Akamai has, although I don't like it much, always delivered a smooth experience for me. Wondering if the CDN is overloaded, I headed to [Visualizing Akamai](http://www.akamai.com/html/technology/dataviz3.html) to see if there is a sharper-than-expected increase in usage.

No, there wasn't any. In fact the traffic was dropping.

Then I suddenly recalled that it was reported that Apple was to roll out its own CDN a few months back. I then fired up Wireshark on my Mac to see where the traffic was going. It turns out the traffic was routed to:

Host: `appdownload.buni.guat.aaplimg.com`
IP: `17.253.64.226`

And the latency (ping) to 17.253.64.226 is about 50ms. Considering it is located in Hong Kong, this is not a good value at all.

Then I wonder what node and performance would traffic from Mainland China would give. I visited [360 Cloud Monitoring](http://ce.cloud.360.cn), a website where you can do name lookups and pings. It turns out that the CDN was offloaded to ChinaNetCenter's network.

And I wondered the same for other countries and networks. Apple's CDN for [Russia](http://ru.edis.at/). Limelight for [Singapore](http://www.oneasiahost.com/lg). Akamai for [Taiwan](http://traceroute.hinet.net)

Back to my problem. The performance of the donwload would be much better if it is routed to an Akamai edge. The solution? Host file of course! Getting the Akamai CNAME from the previous Taiwan looking glass, I then resolved it to my ISP's local Akamai edge and put that in my `/etc/hosts` file.

And now I am download the file at blazing-fast 5MB/s while I was typing this blog post...
