---
title: "How a 1976 Chip Revolutionized Computer Efficiency: Understanding the PIC"
date: "2025-07-07"
description: "An introduction to a component that revolutionized the industry"
tags: ["Systems", "Kernel", "Os"]
---

In the initial era of the programming world, the kernel keeps polling hardware devices to know if they have sent any data, which mean that they have wasted significant time and resources, especially with only a single cpu core. How does one solves this major issue to optimize the computational resources?

&nbsp;

Intel 8259 PIC (Programmable Interupt Controller), a piece of hardware invented by Intel in 1976 which was part of the MCS-85 family is used to solve this very problem. It was first used in the IBM computer in 1981, It is known by the modern community as the “Legacy PIC”.

&nbsp;

![PIC](/posts_imgs/PIC.jpeg)

&nbsp;

Imagine a computer that keeps on polling each of the hardware for data instead of using a PIC, It would be incredibly slow right? The Intel 8259 PIC receives multiple signal interrupts from their respective hardware and is responsible for masking and passing them as a single data to the cpu.

&nbsp;

Whenever the PIC receives data, it marks the port 0x20 to signify that there is data in the PIC.
The PIC then raises an interrupt in the processor, then the interrupt handler does whatever processing is needed then it informs the PIC that the processing is finished, at which point the PIC unmarks the port to signify that there is no other data available in the PIC.

&nbsp;

In the IBM computer architecture there appears to be 2 PICs, just why are both of them needed? the Intel 8259 only has 8 ports which isn’t enough to connect all of the necessary hardware, so 2 was used in the architecture.

&nbsp;

The Intel 8259 PIC was then classified into 2 types, the “Slave” (Reffered to as “secondary” or “cascading”) and the “Master” (Sometimes reffered to as “Primary”), only the master PIC is connected to the processor, the slave PIC is connected to one of the ports of the Master PIC. In some computers after the 1976 IBM computer, more than 2 was used to supplement the amount of peripheral devices that the computer at that time uses.  

&nbsp;

```rust
      ____________            ____________
---> |            |     ---> |            |
---> |            |     ---> |            |      _____
---> |   Slave    |--------> |   Master   |     |     |
---> | Interrupt  |     ---> |    PIC     |---> | CPU |
---> |            |     ---> |            |     |_____|
---> |            |     ---> |            |
---> |            |     ---> |            |
---> |____________|     ---> |____________|
```

&nbsp;

While this master-slave configuration was an ingenious solution for its time, the evolution of computer architecture eventually demanded a more advanced approach. As systems transitioned from single-core to multi-core processors, the simple, sequential nature of the 8259 PIC became a bottleneck. Its inability to direct interrupts to specific CPUs in a multi-processor system necessitated a new design. This led to the development of the Intel Advanced Programmable Interrupt Controller (APIC), a far more sophisticated system capable of managing a larger number of interrupts and routing them intelligently across multiple processor cores. Although the 8259 is now a legacy device, its fundamental role in establishing interrupt-driven processing was a critical milestone, laying the groundwork for the efficient, high-performance computing we have today.

> **Note:** I have been storing this blog for multiple months lol :)
