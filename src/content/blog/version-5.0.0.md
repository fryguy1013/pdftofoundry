---
title: Version 5.0.0 Released
date: 2024-09-04 19:35:00
---

This is a major release that includes support for Foundry v12, with the following changes:

- Update to v12
- Fix some issues with images not being saved correctly (fixes #16 and #14)
- Update to use the new Compendium Art system in FVTT v12 instead of the PF2E system
- Remove settings for setting compendium art. This is now handled by the Compendium Art system
- Prevent placeholder art from being used as the art in the compendiums
- Add support for token backgrounds to meet parity with the premium art module
- Add button to preset token art to use the premium bestiary art module if you've purchased it
- Load first scene in the world when import is complete
- Move all scene data to separate json files and update the scenes to use the new format
- Improve error messages so I hopefully don't get as many bug reports for things that aren't supported
- Add CORS flag to token art images to hopefully allow externally hosted images to be used (fixes #11)
- Remove resize maps option
- Remove support for compendium art upgrading from pre-4.0.0 versions (i.e. don't go directly from v10 to v12)
- Bump versions of all dependencies
