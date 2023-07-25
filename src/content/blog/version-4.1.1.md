---
title: Version 4.1.1 Released
date: 2023-07-24 13:00:00
---

This is mainly a bugfix release, mainly for things that I broke in 4.1.0, and things that FoundryVTT v11 broke and I didn't notice in 4.1.0.

* Bugfix for tokens that are auto-matically placed not being editable (regression in FVTT v11)
* Bugfix for tokens not being created with default setting (regression in FVTT v11)
* Bugfix for token art not being generated at all (regression in 4.1.0)
* Moved build platform to Vite/rollup to improve performance and hopefully not break anything
