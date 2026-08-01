---
title: 'Field Notes #03: AI Can Read Every Log on the System and Still Not See the Problem'
metaTitle: 'AI Can Read Every Log and Still Miss the Problem | Clay Duncan'
description: 'Field Notes #03 explains where AI troubleshooting stops: when the problem is not in the data, but in the room, the wiring, the setup, or the thing nobody physically looked at.'
ogTitle: 'AI Can Read Every Log and Still Not See the Problem'
ogDescription: 'Four lockouts, three different causes, and one night I thought I had lost everything. The lesson: some problems are not in the data.'
schemaDescription: 'Field Notes #03 explains where AI troubleshooting stops: when the problem is not in the data, but in the room, the wiring, the setup, or the thing nobody physically looked at.'
publishDate: 2026-08-11
updatedDate: 2026-08-11
author: 'Clay Duncan'
audience: 'realtors'
category: 'ai-for-realtors'
tags:
  - 'Field Notes'
  - 'AI for REALTORS®'
  - 'AI troubleshooting'
  - 'AI workflow'
  - 'business systems'
faqs:
  - question: 'Why can AI miss a problem even when it can read every system log?'
    answer: 'AI can miss a problem when the issue leaves no machine-readable evidence. If the fault is physical, environmental, or outside the available data, there may be nothing for AI to detect.'
  - question: 'What should I ask AI when it gets stuck troubleshooting?'
    answer: 'Ask what it cannot see from where it is sitting. That question helps identify physical, visual, environmental, or business-context details that are missing from the data.'
  - question: 'What does this mean for real estate professionals using AI?'
    answer: 'AI can analyze data and patterns, but some real estate problems require physically checking the property, lockbox, lighting, photos, buyer experience, or setup.'
  - question: 'What is one practical habit to try this week?'
    answer: 'Pick a problem you have been circling and ask what you could only learn by physically going and looking. Then go look before asking AI again.'
featured: true
draft: false
---

*Four lockouts, three different causes, and one night I was sure I had lost everything.*

---

## The Takeaway

AI can go places you cannot and read things you never would. But it only knows what the machine can tell it. When a problem lives outside the data, no amount of reading finds it, and the fix comes from a person looking at the thing with their own eyes.

---

## What Happened

I run an autonomous AI agent on a dedicated Mac Mini. Deliberately a separate machine from my personal computer, because I did not want something with that much system access sitting on the same box I keep my life on.

That server locked up four times.

### The first time

I sat down at it and nothing worked. No cursor. Keyboard shortcuts dead. I could still type my password in blind and get logged in, but once I was in, I could not do anything. The screen was there. It just would not respond to me.

My agent was still reachable from my phone. So I asked it to look. It went in through the shell, found what was wrong, and fixed it in under five minutes.

Worth sitting with that. I was locked out of my own machine, standing right in front of it, and the thing that got me back in was software I was talking to from another room.

### The second time

About two and a half weeks later. Same feeling, different cause.

A background service on the machine had been quietly corrupting the part of the system that draws the cursor. And when we tried to shut that service off, the attempt spawned a security prompt that got stuck open and swallowed the entire input layer. So the failed fix made it worse.

The agent worked through it: killed the stuck prompt, rebooted, then physically relocated the offending service so it could never start again on its own.

Two for two. At this point I trusted the pattern. Machine wedges, agent fixes it, I get on with my day.

### The third time

Two weeks after that, and this one was different.

It started the same way, input cycling in and out. Then the display wedged. Then I started hard rebooting, and after a few of those the machine came up to a black screen. Solid power light. No response on the network. My agent was simply gone, for hours.

I thought I had lost everything.

Not the hardware. The hardware is replaceable and I would have been annoyed about it for an afternoon. What was on that machine was everything my agent knew. Months of memory, configuration, accumulated setup, all the context that made it useful instead of generic. All of it sitting on a box that was now a black screen and a power light.

I sat there running through what it would take to rebuild it from nothing, and I could not come up with a version of that answer I liked.

I got it back through recovery mode and a disk repair, which reported everything as healthy. No explanation. It just started working again.

Then I went looking for the most recent backup of the agent's state. The most recent one anybody could point to was seven weeks old.

### The fourth time

Two days later. Cursor frozen. Keyboard dead. Only a couple of trackpad gestures responding at all.

I cold-rebooted repeatedly. Ran the disk repair twice more, clean both times. Nothing changed.

I asked the agent to fix it like it had the first two times, and this time it came back and told me plainly that it could not. Every repair it knew of required a level of system permission it did not have and could not grant itself. It had checked, in the moment, rather than repeating what worked before. There was no way in from its side, and it said so.

So I was out of ideas. And the only thing I had not tried was looking at the machine from somewhere else.

I got a working session just long enough to turn on screen sharing, and I connected to the server from my personal Mac.

The moment the window opened, I saw it.

There were two desktops. Side by side. My browser and my terminal were sitting on a second screen that did not exist as far as I could tell standing at the machine.

I proved it by hand. Walked over to the server, clicked the browser icon at the physical console, and watched it open on the invisible half.

The cause was a cable. One portable monitor was plugged into the Mini twice, once by HDMI and once by USB-C. The computer treated one screen as two separate displays. Every click I had made for days had been working perfectly. It was just landing somewhere I could not see.

The fix was moving that monitor to wall power so the machine only saw it once.

---

## Why It Happened

Two things were true at the same time, and both matter.

**AI genuinely fixed the first two.** Those were software problems that left evidence. There was a broken process, a stuck prompt, a service misbehaving. All of it was readable from inside the machine, and something that can read the whole system faster than I ever could is exactly the right tool for that.

**The fourth one left no evidence at all.** Nothing was broken. No error was thrown, because nothing errored. The clicks were dispatching correctly. The system was doing precisely what it was told, and every log on that machine would have reported a healthy computer, because it was one.

The problem was not in the data. The problem was in the room.

That is the boundary. AI sees what the system reports about itself. When the fault is in how you and the machine are physically arranged, in what is plugged into what, in what you can and cannot see from where you are standing, there is nothing to read. It is not a limitation you can prompt around, and it is not a failure of the tool. It is just the edge of what data can tell you.

The part I respect most: it told me. It did not thrash, invent a theory, or keep trying things to look useful. It said there is no path from here.

---

## What This Means for Your Business

**Ask what it cannot see.** When AI is stuck on a problem, that is the moment to ask directly: what would you not be able to detect from where you are sitting? You will usually find your answer in what comes back.

**Change the angle before you change the question.** Four cold reboots taught me nothing. One look from a different machine solved it instantly. Same for your work: if a listing is not moving and the numbers all say it should, stop rerunning the numbers. Go stand in the house. Drive up to it the way a buyer would. Look at it on a phone instead of your monitor.

**Some problems are physical.** The photos are not converting, and the answer is the light in the living room. The showings are not booking, and the answer is a lockbox on the wrong gate. AI can analyze your data perfectly and be no help at all, because the thing that is wrong never made it into the data.

**Back up what you would hate to lose, before you need to.** I found out my backup was seven weeks old on the day I thought I had lost everything. Your version is the client list, the transaction files, the photo library. Do not learn the age of your last backup on the worst day.

---

## One Thing to Try This Week

Pick the problem you have been going in circles on. Anything.

Before you ask AI about it again, ask yourself one question: what would I only be able to find out by physically going and looking?

Then go look.

The whole time my machine was broken, it was working correctly. I just could not see where the work was landing.

---

## About the Author

Clay Duncan is a Huntsville, Alabama Mortgage Loan Originator with Princeton Mortgage, NMLS #118739, and runs practical AI training for real estate professionals across North Alabama. He is currently building a suite of AI-powered tools for REALTORS®. This series covers what he learns doing it, including the parts that break.

---

## If You Want to Go Deeper

Clay's AI training for REALTORS® is built for practical adoption: what to use, when to use it, and how to make it stick. Sessions run for offices, teams, and partner groups.

[Explore REALTOR AI training](/realtor-ai-training/)

[View upcoming events and webinars](/events/)
