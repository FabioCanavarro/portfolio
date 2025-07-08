---
title: "How a 1976 Chip Revolutionized Computer Efficiency: Understanding the PIC"
date: "2025-07-07"
description: "An introduction to a component that revolutionized the industry"
tags: ["Systems", "Kernel", "os"]
---

In the initial era of the programming world, the kernel keeps polling hardware devices to know if they have sent any data, which mean that they have wasted significant time and resources, especially with only a single cpu core. How does one solves this major issue to optimize the computational resources?

Intel 8259 PIC (Programmable Interupt Controller), a piece of hardware invented by Intel in 1976 which was part of the MCS-85 family is used to solve this very problem. It was first used in the IBM computer in 1981, It is known by the modern community as the “Legacy PIC”.

&nbsp;

![PIC](/posts_imgs/PIC.jpeg)

&nbsp;

Imagine a computer that keeps on polling each of the hardware for data instead of using a PIC, It would be incredibly slow right? The Intel 8259 PIC receives multiple signal interrupts from their respective hardware and is responsible for masking and passing them as a single data to the cpu.

Whenever the PIC receives data, it marks the port 0x20 to signify that there is data in the PIC.
The PIC then raises an interrupt in the processor, then the interrupt handler does whatever processing is needed then it informs the PIC that the processing is finished, at which point the PIC unmarks the port to signify that there is no other data available in the PIC.

In the IBM computer architecture there appears to be 2 PICs, just why are both of them needed? the Intel 8259 only has 8 ports which isn’t enough to connect all of the necessary hardware, so 2 was used in the architecture.

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

In the grand story of computing, the journey from the simple, elegant 8259 PIC to the complex APIC architecture represents a fundamental shift in how hardware and software communicate. This evolution from a polling-based, resource-intensive model to an efficient, interrupt-driven system was not just an improvement—it was a necessary leap that unlocked the potential for true multitasking and paved the way for the multi-core processors we take for granted today. So, the next time you see your computer seamlessly juggling dozens of tasks, remember the unsung hero of this process: the programmable interrupt controller, a piece of technology that taught our machines how to listen.

> **Note:** I have been storing this blog for multiple months lol :)
