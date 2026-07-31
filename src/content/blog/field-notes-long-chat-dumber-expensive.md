---
title: 'Field Notes #01: Your Long Chat Is Getting Dumber and More Expensive'
metaTitle: 'Long AI Chats Get Dumber and More Expensive | Clay Duncan'
description: 'Field Notes #01 explains why long AI chats get slower, more forgetful, and more expensive, and how real estate professionals can fix it with cleaner handoffs and fresh chats.'
ogTitle: 'Your Long Chat Is Getting Dumber and More Expensive'
ogDescription: 'A practical Field Notes lesson on why long AI chats slow down, forget context, and cost more than they should.'
schemaDescription: 'Field Notes #01 explains why long AI chats get slower, more forgetful, and more expensive, and how real estate professionals can fix it with cleaner handoffs and fresh chats.'
publishDate: 2026-07-31
updatedDate: 2026-07-31
author: 'Clay Duncan'
audience: 'realtors'
category: 'ai-for-realtors'
tags:
  - 'Field Notes'
  - 'AI for REALTORS®'
  - 'AI workflow'
  - 'ChatGPT'
  - 'Claude'
faqs:
  - question: 'Why do long AI chats get worse over time?'
    answer: 'Long AI chats get worse because each new message carries more conversation history, which makes the tool slower, more expensive to process, and more likely to compress or lose earlier details.'
  - question: 'When should I start a new AI chat?'
    answer: 'Start a new chat when the job is done, when the AI asks for something you already gave it, or when it contradicts something you already decided.'
  - question: 'How do I move work from an old AI chat to a new one?'
    answer: 'Ask the old chat to summarize what you are working on, what has been decided, and what is still open. Paste that summary into a new chat as the first message.'
  - question: 'Where should real estate professionals store durable AI instructions?'
    answer: 'Durable facts such as name, market, brokerage, tone, and writing preferences should live in custom instructions or profile settings, not inside one long conversation.'
featured: true
draft: false
---

*Field Notes is a weekly series on what I learn building AI tools for real estate agents. Real incidents, real costs, and what they mean for your business.*

---

## The Takeaway

Every message you send in a chat makes the AI re-read the entire conversation from the beginning. That is why a long thread gets slower, sloppier, and eventually starts forgetting things you told it an hour ago. The fix is not a better prompt. It is a new chat.

---

## What Happened

In early June I got a bill from Anthropic for roughly $350 across a few days of work.

That was not what I expected. I was building software with AI agents, and my mental model was that the expensive part must be the building. Writing code, generating documents, producing output. That is the work. That is what I am paying for.

I went and looked at the actual breakdown, and it was not that at all.

About 88 percent of the spend was the AI re-reading the conversation. Only 12 percent was it producing anything. And the part I actually cared about, the decisions and the reasoning and the judgment calls, was about one percent of the total.

I was paying almost the entire bill to keep the conversation alive.

Now, here is why that matters to you even though you will never see a bill like that. I pay per use, so my invoice itemized the whole thing and showed me, in dollars, exactly what was going on under the hood. That receipt is the only reason I can prove any of this. You are on a flat monthly plan, so you will never get that receipt. But the exact same thing is happening inside your long chats. You just feel it instead of getting billed for it.

Consider the dollars my X-ray, not your warning.

And the picture that X-ray showed was ugly. One session on 06-02-2026 cost $82.71 by itself, which was 47 percent of everything I had spent on that project. It was 460 separate calls for 107 back-and-forth exchanges, meaning the conversation was being re-read about four times more than it should have been. A healthy session runs about one to one. This one had gotten into a loop, and every time it went around, it dragged the entire history with it.

The second half of this lesson showed up in July, and it cost me something worse than money.

I was about seven hours into a long working session. Earlier in that session, the AI had created a test account, logged into it, and confirmed it worked. I watched it happen. Two hours later, in the same conversation, I asked it to use that account and it told me it did not have the credentials.

It had created them. It had verified them. The file was sitting in its own folder.

It was not lying to me. It genuinely did not know anymore.

---

## Why It Happens

Here is the part almost nobody explains, and it is simple once you see it.

AI chat tools have no memory between messages. When you send message number 60, the tool does not actually remember messages 1 through 59. What happens instead is that your entire conversation gets bundled up and sent again, from the top, every single time.

So message 3 is cheap and fast. Message 60 is carrying fifty-nine messages of baggage on its back.

That has two consequences, and you feel both of them.

**It gets expensive.** For me, that shows up as a literal bill, because I pay per unit of text processed. For you, it does not. Nobody on a $20 a month plan is going to get a surprise $350 charge. That is not your risk, and I do not want you to think it is. Your version is quieter: the chat bogs down, responses slow to a crawl, and you hit your usage limit on a Thursday afternoon and cannot figure out why, because you did not feel like you did that much work. You did not. Your conversation did.

**It gets forgetful.** This is the one that actually costs you something. Every one of these tools has a ceiling on how much it can hold at once. When your conversation gets close to that ceiling, the tool does not stop and warn you. It quietly compresses what came earlier. It summarizes it, squeezes it down, throws out what it guesses is unimportant.

Sometimes it guesses wrong.

That is exactly what happened with my test account. The detail got compressed away, and what was left was a confident assistant with a gap it could not see. It did not say "I might be forgetting something." It said "I do not have that." Same tone of voice as everything else it had told me all day.

That last part is the whole danger. A tool that forgets and sounds uncertain is annoying. A tool that forgets and sounds certain is a problem.

---

## What This Means for Your Business

Four things I changed, all of which translate directly to how an agent works.

**One chat, one job.** I now treat a conversation as disposable. Writing listing copy for 1247 Whitesburg is one chat. Building a buyer follow-up sequence is a different chat. When the job is done, the chat is done. Do not keep one running thread called "AI stuff" that you have been adding to since April. That thread is the problem.

**Learn the tell.** There are two reliable signals that a conversation has gone too long. It asks you for something you already gave it. Or it contradicts something the two of you settled earlier. Either one means you are past the useful life of that thread. Do not push through it, and do not spend twenty minutes correcting it. Start fresh.

**Carry a handoff, not a history.** This is the single most useful habit I picked up. Before you abandon a long thread, ask it to write you a summary: what we are working on, what we decided, what is still open. Copy that. Paste it into a brand new chat as your first message.

You just kept the conclusions and threw out the baggage. The new chat is fast, sharp, and it knows everything that matters. I do this constantly now. It is how I move between working sessions without losing my place.

**Put durable facts somewhere durable.** Your name, your market, your brokerage, your tone, how you like things written. That belongs in the tool's custom instructions or profile settings, not typed into a chat. Anything living inside a conversation can be compressed away. Anything in the settings comes back every time, in every new chat, for free.

That last one is also why starting a new chat is cheaper than people assume. If you set it up properly, the new chat already knows who you are.

---

## One Thing to Try This Week

The next time a chat starts feeling off, do not fight it.

Type this: **"Summarize what we're working on, what we've decided, and what's still open."**

Copy the answer. Open a new chat. Paste it in as your first message.

Then keep going. You will notice the difference in about thirty seconds.

---

## About the Author

Clay Duncan is a Huntsville, Alabama Mortgage Loan Originator with Princeton Mortgage, NMLS #118739, and runs practical AI training for real estate professionals across North Alabama. He is currently building a suite of AI-powered tools for REALTORS®. This series covers what he learns doing it, including the parts that break.

---

## If You Want to Go Deeper

Clay's AI training for REALTORS® is built for practical adoption: what to use, when to use it, and how to make it stick. Sessions run for offices, teams, and partner groups.

[Explore REALTOR AI training](/realtor-ai-training/)

[View upcoming events and webinars](/events/)
