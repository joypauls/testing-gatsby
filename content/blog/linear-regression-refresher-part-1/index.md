---
title: Linear Regression Refresher
subtitle: Part 1 - The Framework
description: Learn linear regression more deeply
date: "2020-01-01"
---

Feel like you know what linear regression **is** but didn't learn the math, or just forgot and need a refresher? Join the club! We've all been there, whether we admit it or not :) A little math knowledge is assumed but my hope is that the parts that may be unfamiliar aren't necessary to get the big picture.

## Gist

> Linear regression is a method for modelling a process with a quantitative output observed data and simple assumptions.


Input -> System -> Output

Input -> System + Noise -> Output


## Learning Regression

*If you are just looking for a refresher , you can skip this section.*

I think one big stumbling block to learning about linear regression, especially for the first time, is that it's usually the introduction of several different concepts at once, all of which actually are pretty important! Whether or not these exact terms are used, to understand linear regression end-to-end you have to understand:

- loss functions
- function minimizations


## The Regression Problem

Let's consider a minimal version of the regression problem: given our data in the form of a dependent variable $$Y$$ and an independent variable $$X$$[^1], we want to find a function $$f$$ so that we can model the unknown system that generated our data. Our model looks like this,

$$
Y = f(X) + \epsilon
$$

where $$\epsilon$$ represents the error that comes from imperfect data[^2]. This formulation is at the heart of everything we are doing[^3], so let's linger here for a minute. 

### What is $$f$$?

Typically there is no actual hope of finding the "real" $$f$$ - we can't possibly account for all the factors that go into real-world phenomena! There are unmeasured variables, changing conditions, and interns who knock over test tubes in the lab... *there is always noise*. So what we do instead is estimate $$f$$, to make inferences and predictions about $$y_i \in Y$$. The equation we actually deal with is then

$$
\hat{y_i} = \hat{f}(x_i) + \epsilon
$$

I will keep using $$f$$ when talking about the function of $$X$$ we are trying to find though.


We will assume as usual that $$\epsilon$$ is Normally distributed and is independent from $$X$$. Why is this important? Well one thing we often are interested is the expected value of Y given an input. Formulating this will help us figure out where to go next:

$$
\begin{aligned} E[Y|X=x] &= E[f(X) + \epsilon|X=x] \\
&= E[f(x)] + E[\epsilon] \\
&= E[f(x)] \end{aligned}
$$

so what we see is that all we have to do to estimate the expected value of $$Y$$ is calculate $$E[f(x)]$$ - pretty cool!.

> When $$f$$ is a linear function of $$X$$, we call this task **linear regression**.

### Assumption: Our Data Is Imperfect


### How We Solving The Regression Problem

We don't usually want just any function though - we want the **best** function! As mathematicians, that word "best" should raise a lot of questions, and this is where we need the concept of a **loss function**. Without going too deep, a loss function $$L$$ provides the framework for evaulating the performance of $f$ and defines what "best" means by answering the question **how off is our guess of $$f$$?**. We then have two tasks to solve in our simplified regression problem:

1. Choose an appropriate loss function $$L$$
2. Find the function $$f$$ such that the value of $$L$$ is the lowest

In introductory stats, the loss function we use is almost always the **squared error loss**. Often we are not even taught that this part of the :sparkles: art :sparkles: of regression! It is common enough in today's ML world that I think it's useful to not take it as a given here.

## Squared Errors 



## Minimizing Squared Errors, Conditional Mean




## Why not another loss function?

kjhsokfhsagld

---

[^1]: Most of this stuff is generalizable, but for simplicity assume $$Y \in \mathbb{R}, X \in \mathbb{R}^m$$
[^2]: Usually called the *irreducible error*
[^3]: This really isn't specific to regression either, but I think limiting out field of view will help us understand the framework!

