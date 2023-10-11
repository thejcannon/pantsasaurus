---
image: https://images.unsplash.com/photo-1515902542059-54a400cc66fe
authors: stuhood
tags: [idk]
---

# Dependency inference: Precise caching and concurrency, without the boilerplate

![picture](https://images.unsplash.com/photo-1515902542059-54a400cc66fe)

Scalable build tools have historically meant a significant boilerplate burden. But it doesn’t have to be that way! Pants v2 supports all of the caching, concurrency, and introspection you need to scale your repository, with significantly less boilerplate, thanks to… Dependency inference!

<!-- truncate -->

As discussed in our post announcing Pants v2, it's clear that Python has "grown up" by gaining facilities to help it to scale to larger projects. But as codebases grow and tool counts increase, more Python codebases need build tools. While you could write bespoke scripts to coordinate each of your tools, using Pants brings benefits like caching, concurrency, introspection, a simple and uniform user experience, and more!

Unfortunately, scalable build tools have historically meant a significant boilerplate burden: scattering BUILD files throughout your repository and then needing to edit both your code and the redundant dependency information in build definitions.

But it doesn’t have to be that way! Pants v2 supports the precise caching, concurrency, and introspection that you need to scale your repository, with up to 90% less BUILD boilerplate, thanks to… Dependency inference!

...
