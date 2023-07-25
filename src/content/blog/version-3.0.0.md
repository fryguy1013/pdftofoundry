---
title: Version 3.0.0 Released
date: 2021-11-25 02:52:00
---

*note this post originally appeared on Patreon*

Version 3.0.0 is out now.

Brand new in this release is a feature is the ability for PDF to Foundry to take images of NPCs from the PDFs that are imported and automatically apply the image to actors and tokens for the adventure. Additionally, it will import all of the necessary actors for the adventure into your world and place their tokens onto scenes within your world where appropriate. Information on which modules are supported are indicated by stars on the import dialog.

Additionally, you can import the Bestiary PDFs and PDF to Foundry will apply the images from these books to tokens. You can import the Bestiary PDFs before or after importing any adventure module. This will not create any actors in your world automatically, as this will lead to performance problems within Foundry VTT if there are lots of unused actors in your world. Instead, it will apply these images to existing tokens created by PDF to Foundry as well as any new actors dragged in from the compendiums (this can be disabled in the settings). Keep in mind that the image will not be displayed in the compendium until the actor is imported into your world. The database of imported books is stored in a well-known file within the Data folder of Foundry VTT, so the imported content is usable across any world on the same Foundry VTT server.

The following are the new content for this release:

* Strength of Thousands #5: Doorway to the Red Star
* Pathfinder Society Season 3-04 - The Devil-Wrought Disappearance
* Bounty #15: Treasure off the Coast

Additionally, the following modules have been updated with some minor fixes and added token placement:

* All Age of Ashes books
* All Extinction Curse books
* All Agents of Edgewatch books
* All Abombination Vaults books (thanks TMun)
* All Fists of the Ruby Phoenix books
* The Slithering
* The Fall of Plaguestone

Finally, I rewrote part of the PDF parsing code to more correctly handle placement of certain sequences of PDF commands. Without going into too much technical detail, this should more correctly handle cases of white-space and it allowed me to remove some workaround code in several adventure modules. However, ultimately this was a change so there may be some undetected regressions.

Now that you're at the end of the release notes, I have to thank all of you for the extreme amount of support you've shown me. The whole purpose of this Patreon is to support the purchases of PDFs for me to support the community of PDF to Foundry users and between this Patreon and gift cards that people have given me outside of the Patreon, I might have enough to purchase all of the PF2e content that has been created by Paizo for a while to come. I plan on doing an audit of my income and expenses for this by the end of the year, and may pause this Patreon if I end up with a significant excess coming into 2022.

I hope you enjoy this release, and I doubly hope that there aren't any bugs :)