---
image: https://images.unsplash.com/photo-1513201099705-a9746e1e201f
authors: benjy
tags: [release]
---

# Introducing Pants v2

![pic](https://images.unsplash.com/photo-1513201099705-a9746e1e201f)

There are so many tools in the Python development ecosystem. Installing, configuring and orchestrating them—all while not re-executing work unnecessarily—is a hard problem, especially as your codebase grows. Fortunately, there is now a tailor-made (pun intended) solution: Pants v2!

<!--truncate-->

## Pants 2.0.0, the first stable release of the Pants v2 open-source build system, is out now!

There are so many tools in the Python development ecosystem. You might use pip to resolve dependencies, pytest to run tests, flake8 and pylint for lint checks, black and isort for auto-formatting, mypy for type checking, IPython or Jupyter for interactive sessions, setuptools, pex or docker for packaging, protocol buffers for code generation, and many more. Not to mention any custom tooling you've built for your repo.

Installing, configuring and orchestrating the invocation of these tools—all while not re-executing work unnecessarily—is a hard problem, especially as your codebase grows. The lack of a robust, scalable build system for Python has been a problem for a long time, and this has become even more acute in recent years, with Python codebases increasing in size and complexity.

Fortunately, there is now a tailor-made (pun intended) solution: Pants v2!

Pants v2 is designed from the ground-up for fast, consistent builds. Some noteworthy features include:

- Minimal metadata and boilerplate
- Fine-grained workflow
- Shared result caching
- Concurrent execution
- A responsive, scalable UI
- Unified interface for multiple tools and languages
- Extensibility and customizability via a plugin API

---

## A little history

...
