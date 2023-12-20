---
title: Version 4.1.2 Released
date: 2023-12-19 16:26:00
---

This is another bugfix release.

- Fix token art database not working since 4.1.1.
- Work around issue when other installed modules break the array prototype by adding methods to it
- Fix issue with actors in PFS 2-04
- Major refactor of code, including automated tests in FVTT (using playwright)

Sorry that this one took a long time to get out. I was in the middle of
a big refactor that completely broke everything and it was challenging
to pull it back. I'm on winter break from my day job so I had some time to
finish that refactoring.

There are also so many corner cases with the token art code that it was
challenging to even think about correctly. The bug-fix in 4.1.1 completely
broke how it was supposed to work, even though it did technically fix the
bug that was in 4.1.0. I added a bunch of automated tests to audit all of the cases so I'm pretty confident it should work correctly now.
