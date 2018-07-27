---
layout: post
title: Bird BGP Config for HE.net/tunnelbroker.net tunnels
---

Essentially just a reminder for myself:

```
# This is a minimal configuration file, which allows the bird daemon to start
# but will not cause anything else to happen.
#
# Please refer to the documentation in the bird-doc package or BIRD User's
# Guide on http://bird.network.cz/ for more information on configuring BIRD and
# adding routing protocols.
#
# Change this into your BIRD router ID. It's a world-wide unique identification
# of your router, usually one of router's IPv4 addresses.
router id 139.99.56.136;

# The Device protocol is not a real routing protocol. It doesn't generate any
# routes and it only serves as a module for getting information about network
# interfaces from the kernel.
protocol device {
}

# The Kernel protocol is not a real routing protocol. Instead of communicating
# with other routers in the network, it performs synchronization of BIRD's
# routing tables with the OS kernel.
protocol kernel {
        metric 64;      # Use explicit kernel route metric to avoid collisions
                        # with non-BIRD routes in the kernel routing table
        import none;
        export all;     # Actually insert routes into the kernel routing table
#       kernel table 254;
}

protocol bgp henet
{
        local as 138006;
        source address 2001:470:17:a5::2;
        import all;
        export all;
        graceful restart on;
        multihop 2;
        neighbor 2001:470:17:a5::1 as 6939;
}

protocol static
{
    route 2a07:1c44:8700::/40 via 2001:470:17:a5::2;
    route 2001:470:17:a5::1/128 via "he0";
}
```

Shout out to Aveline (ZeptoVM/Misaka Network) from LET Discord who helped me figure this out.
