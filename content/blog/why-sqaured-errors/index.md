---
title: Why Use Squared Errors?
subtitle: 
date: "2020-01-01"
---

## Gist

> The function that minimizes the squared error loss function is the conditional mean.

## Good Problems, Bad Explanations

I came to statistics and machine learning from a background in proof-driven mathematics. These two are not in opposition *at all*, however most of my high school and undergrad exposure to stats certainly felt that way. One of the most significant stumbling blocks for me as a beginner was how soon the concept of **squared errors** came up right away with very little motivation! Many concepts in beginning statistics matches intuition pretty closely so sometimes the background is unnecessary - for me, this was not one of those concepts. While it isn't the only context this comes up in, I think the best way to explore this is in the context of the **regression problem**.


## A Little Setup: Regression

Let's consider a minimal version of the regression problem: given our data in the form of a dependent variable $$Y$$ and an independent variable $$X$$[^1], we want to find a function $$f$$ so that we can model the unknown process that generated our data. Our model looks like this,

$$Y = f(X) + \epsilon$$

where $$\epsilon$$ represents the prediction error. We don't usually want just any function though - we want the **best** function! As mathematicians, that word "best" should raise a lot of questions, and this is where we need the concept of a **loss function**. Without going too deep, a loss function $$L$$ provides the framework for evaulating the performance of $f$ and defines what "best" means by answering the question **how off is our guess of $$f$$?**. We then have two tasks to solve in our simplified regression problem:

1. Choose an appropriate loss function $$L$$
2. Find the function $$f$$ such that the value of $$L$$ is the lowest

In introductory stats, the loss function we use is almost always the **squared error loss**. 

## Squared Errors 



## Minimizing Squared Errors, Conditional Mean




## Why not another loss function?



---

[^1]: Most of this stuff is generalizable, but for simplicity assume $$Y,X \in \mathbb{R}$$
