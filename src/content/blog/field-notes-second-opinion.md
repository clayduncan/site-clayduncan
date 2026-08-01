---
title: 'Field Notes #02: A Second Opinion That Has Seen the First Opinion Is Not a Second Opinion'
metaTitle: 'A Second AI Opinion Needs the Facts First | Clay Duncan'
description: 'Field Notes #02 explains why AI agrees when you hand it your conclusion, and why real second opinions start with facts instead of a verdict.'
ogTitle: 'A Second Opinion That Has Seen the First Opinion Is Not a Second Opinion'
ogDescription: 'Why AI agrees with the conclusion you hand it, and how to get a real second opinion by giving it the facts first.'
schemaDescription: 'Field Notes #02 explains why AI agrees when you hand it your conclusion, and why real second opinions start with facts instead of a verdict.'
publishDate: 2026-08-04
updatedDate: 2026-08-04
author: 'Clay Duncan'
audience: 'realtors'
category: 'ai-for-realtors'
tags:
  - 'Field Notes'
  - 'AI for REALTORS®'
  - 'AI workflow'
  - 'AI review'
  - 'AI prompting'
faqs:
  - question: 'Why does AI agree with my conclusion?'
    answer: 'AI often agrees because your conclusion becomes part of the context it is trying to continue. If you want an independent read, give it the facts before you give it your verdict.'
  - question: 'How do I get a better second opinion from AI?'
    answer: 'Give AI the full situation and ask what it notices before telling it what you think is wrong. Agreement only means something when disagreement was possible.'
  - question: 'What should real estate professionals give AI when asking for feedback?'
    answer: 'Give AI the full email thread, listing description, numbers, or situation rather than a summary filtered through what you already think matters.'
  - question: 'What is one practical AI habit to try this week?'
    answer: 'Paste the whole thing and ask: what do you notice about this, and what would you change? Then compare that answer with what you were about to ask it to do.'
featured: true
draft: false
---

*Field Notes is a weekly series on what I learn building AI tools for real estate agents. Real incidents, real costs, and what they mean for your business.*

---

## The Takeaway

Hand AI your conclusion and it agrees with you. Hand it the facts and ask what it sees, and it finds the thing you missed. Same tool, same question, different opening line.

---

## What Happened

Two stories, and the first one is me being wrong out loud.

One of the tools on my platform was failing for real agents. A run would stall partway through and never finish. We had already tried two fixes and neither one moved it.

Then somebody noticed the thing that actually cracked it open. When a real agent ran the tool, my account showed no AI usage at all. Zero. But when we ran the same tool ourselves from the back end, same account, same live service, it billed normally every time. So the work was never reaching the AI on the real path. It was dying somewhere before that, quietly, in a spot our own testing walked right past.

That is where I formed my theory, and I was confident enough to say it flat out: it is one defect, in how the tool reads its stored data.

The AI running my build went and read the actual code and told me no. That layer was fine. The real defects were somewhere else, in how the tool handed work from one step to the next, and in how it was swallowing its own errors instead of reporting them. That second one is why nothing ever surfaced. It was failing and then hiding the failure. Two problems, neither of them the one I named.

Sit with what almost happened. If I had opened with "go fix how it reads stored data," that is what it would have done. It would have gone into working code, changed something that was not broken, reported the job complete, and the tool would still be dead. Then I am debugging a problem I created on top of the problem I still have.

The second story is what I did about it, and it starts with an honest admission about how I was working.

I was the loop.

I would write an instruction and send it to the assistant that runs my build. It would go do the work and come back. Then I would copy what came back into a separate chat with a second AI, because I needed help making sense of what I was looking at. That second AI would tell me what it thought. Then I would carry that critique back to the first one and write the next instruction.

<figure class="article-figure">
  <img src="/images/blog/field-notes-second-opinion-old-loop.svg" alt="Diagram of Clay manually carrying work between his assistant and a second AI in the old review loop." loading="lazy" />
  <figcaption>The old loop: too much of the review depended on what I chose to copy, paste, and relay.</figcaption>
</figure>

Count the stops in that picture. Three of the five are me.

And look at what the second AI was actually judging. It never saw the work. It saw whatever I had copied and pasted, filtered through what I thought was important enough to copy. It was giving me a real opinion about an incomplete picture, and I was the reason the picture was incomplete.

So I rebuilt the trip.

Now the job goes out through my assistant to a builder that writes the code. Then it goes to a reviewer, and the reviewer is the piece that matters. It does not read the builder's write-up of what it did. It opens the actual code and the actual running program and forms its own opinion from that. If it does not like what it finds, it hands the work straight back to the builder, and that can happen several times without touching me. When it finally passes, it comes back up through my assistant, which checks it independently before I ever look at it.

<figure class="article-figure article-figure-tall">
  <img src="/images/blog/field-notes-second-opinion-review-loop.svg" alt="Diagram of the rebuilt AI review loop with a builder, automated checks, independent reviewer, model audit, assistant verification, and Clay's final review." loading="lazy" />
  <figcaption>The new loop: the reviewer reads the actual work cold, and failures go back to the builder before I touch it.</figcaption>
</figure>

The reason the reviewer never reads the write-up is the same reason the first story went the way it did. A write-up is the builder's conclusion. Feed a conclusion to a reviewer and it grades the claim instead of the work, and it nods.

I still use a separate chat as my strategist, and I would not give that up. What changed is that I stopped being the courier, and the second opinion started seeing the real thing instead of my summary of it.

On the first real run, the reviewer failed the work twice before letting it through. Two of the things it caught: a missing piece of plumbing that would have dropped every agent onto an error screen on their very first click, and a database file sitting in a public code repository where it had no business being. Both would have shipped straight past me.

---

## The Part That Made Me Sit Down

Here is the one that actually rattled me, and it happened while I was writing this.

I asked my assistant to walk me through that loop so I could draw it. Not to fix anything. Just describe it.

Sitting inside the system was a setting that names which version of AI does the reviewing. I had assumed it pointed at the newest one. It did not. It pointed at a version from the generation before, quietly, because of how the software resolves that name. The reviewer, the one piece whose entire job is catching what everything else misses, had been running a generation behind since the day I built it.

Nothing was broken. Nothing threw an error. The setting said the right word. It just did not mean what I thought it meant, and nothing in the system was checking.

We fixed the version. But the real fix was different: now every run records which AI actually answered, not which one we asked for. Those had never been the same question, and until that moment nobody had thought to ask it.

That is the whole lesson in one place. I had a conclusion, "the reviewer is on the newest model." I never handed anyone the facts and asked what they saw. So for months, nobody looked.

---

## Why It Happened

AI is a prediction engine wearing a conversation costume. It reads everything in front of it and produces the most likely continuation.

Put a conclusion in front of it and the most likely continuation is support for that conclusion. I said the storage was broken, so the natural next move in a conversation like that one is an explanation of how the storage is broken. It is not flattering me and it is not being lazy. I pointed a direction and it went that direction, the same as it would go any direction I pointed.

Which is why your first sentence is doing more work than the rest of the message. "Fix this, it is too long" and "here is this, what would you change" are not two ways of saying the same thing. One is an instruction. One is a question. Only one of them can come back with something you did not already believe.

Here is the part that matters most. Agreement is only worth something if disagreement was possible. When AI confirms a conclusion you handed it, you have learned nothing. When it reaches your conclusion on its own from the raw facts, that is real confirmation and it is worth something. When it reaches a different one, that is better still, because you just caught a mistake for free.

A second opinion that has already seen the first opinion is not a second opinion.

---

## What This Means for Your Business

**Give it the facts, not the verdict.** Do not say "rewrite this listing description, it is too wordy." Paste the description and say "here is the description on a four bedroom in Madison, what would you change and why." You still make the final call. You just make it knowing what a cold read caught, instead of only what you already suspected.

**Ask before you tell on anything that matters.** Pricing objection, hard client email, a listing that has been sitting. Lead with the situation and "what do you see here." Get its read first, then tell it what you were thinking. Now you find out whether you agree, or whether you were about to walk into something.

**Show it the whole thing, not your summary of it.** This is the one I got wrong for months. If you only paste the part you think is relevant, you have already decided what the problem is, and the second opinion can only work inside that decision. Give it the full email thread, the whole description, the entire set of numbers.

**Check the thing nobody has ever checked.** Everybody has a version of my setting that said one thing and meant another. The lockbox code nobody has rotated. The auto-response that has been going out for two years. The listing syndication you assume is still pushing to every site it did on day one. Nothing throws an error when those go wrong. Pick one this month and actually go look.

---

## One Thing to Try This Week

The next time you sit down to have AI fix something, do not tell it what is wrong.

Paste the whole thing and ask one question: what do you notice about this, and what would you change?

Then compare that to what you were about to type. If it matches, you just tested your own judgment against an independent read, which is worth more than the answer you were going to get anyway. If it does not match, you just found the thing you were not looking for.

---

## About the Author

Clay Duncan is a Huntsville, Alabama Mortgage Loan Originator with Princeton Mortgage, NMLS #118739, and runs practical AI training for real estate professionals across North Alabama. He is currently building a suite of AI-powered tools for REALTORS®. This series covers what he learns doing it, including the parts that break.

---

## If You Want to Go Deeper

Clay's AI training for REALTORS® is built for practical adoption: what to use, when to use it, and how to make it stick. Sessions run for offices, teams, and partner groups.

[Explore REALTOR AI training](/realtor-ai-training/)

[View upcoming events and webinars](/events/)
