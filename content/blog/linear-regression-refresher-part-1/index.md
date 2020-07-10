---
title: Linear Regression Refresher
subtitle: Part 1 - The Regression Problem
date: "2020-01-01"
---

Feel like you know what linear regression **is** but didn't learn the math, or just forgot and need a refresher? Join the club! We've all been there, whether we admit it or not :) A little math knowledge is assumed but my hope is that the parts that may be unfamiliar aren't necessary to get the big picture.

## Gist

> Linear regression is a method for modelling a process observed with data using simple assumptions.


## Learning Regression

If you are just looking for a refresher , you can skip this section.

I think one big stumbling block to learning about linear regression, especially for the first time, is that it's usually the introduction of several different concepts at once, all of which actually are pretty important! Whether or not these exact terms are used, to understand linear regression end-to-end you have to understand:

- loss functions
- function minimizations


## The Regression Problem

Let's consider a minimal version of the regression problem: given our data in the form of a dependent variable $$Y$$ and an independent variable $$X$$[^1], we want to find a function $$f$$ so that we can model the unknown process that generated our data. Our model looks like this,

$$
Y = f(X) + \epsilon
$$

where $$\epsilon$$ represents the error. This formulation is at the heart of everything we are doing, so let's linger here.

We will assume as usual that $$\epsilon \sim N(0, \sigma_{\epsilon}^2)$$ and is independent from the input $$X$$. Why is this important to point out? Well one thing we often are interested is the expected value of Y given an input. Formulating this will help us figure out where to go next:

$$
E[Y|X=x] = E[f(X) + \epsilon|X=x] = E[f(x)]
$$

so what we see is that all we have to do to estimate the expected value of $$Y$$ is calculate $$E[f(x)]$$ - pretty cool!.

> When $$f$$ is a linear function of $$X$$, we call this task *linear regression*.

### Assumption: Our Data Is Imperfect


### How We Solving The Regression Problem

We don't usually want just any function though - we want the **best** function! As mathematicians, that word "best" should raise a lot of questions, and this is where we need the concept of a **loss function**. Without going too deep, a loss function $$L$$ provides the framework for evaulating the performance of $f$ and defines what "best" means by answering the question **how off is our guess of $$f$$?**. We then have two tasks to solve in our simplified regression problem:

1. Choose an appropriate loss function $$L$$
2. Find the function $$f$$ such that the value of $$L$$ is the lowest

In introductory stats, the loss function we use is almost always the **squared error loss**. Often we are not even taught that this part of the :sparkles: art :sparkles: of regression! It is common enough in today's ML world that I think it's useful to not take it as a given here.

## Squared Errors 



## Minimizing Squared Errors, Conditional Mean




## Why not another loss function?



---

[^1]: Most of this stuff is generalizable, but for simplicity assume $$Y,X \in \mathbb{R}$$
