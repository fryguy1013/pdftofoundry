## 4.1.1

- Bugfix for tokens that are auto-matically placed not being editable (regression in FVTT v11)
- Bugfix for tokens not being created with default setting (regression in FVTT v11)
- Bugfix for token art not being generated at all (regression in 4.1.0)
- Moved build platform to Vite

## 4.1.0

- Update to v11 (mainly a manifest bump)
- Fix issue with bad images from gamemastery guide import
- Add PFS 3-12 and 3-13
- Fix a few monsters in Bestiary 3 not importing correctly
- Add an option to use art mapping from other modules if it exists, such as the PF2E token pack (defaults to this behavior)
- Fix bug when the "Create Data Entry Actors" option was enabled
- Fix version checking algorithm
- Fix issue in Night of the Gray Death causing a map to not be imported
- Super minor fix in Sundered Waves
- Remove opt-in telemetry since there's paid modules now
- Moved to github (https://github.com/fryguy1013/pdftofoundry)
- Lots of minor technical debt fixes