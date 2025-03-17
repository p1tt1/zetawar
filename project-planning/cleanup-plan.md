# Zetawar Cleanup Plan

**Date:** March 16, 2025  
**Note:** This document is AI-generated.

## Overview

After migrating from Boot to deps.edn, several files and directories are now outdated and can be safely removed. This document outlines the cleanup plan to remove these files and directories.

## Cleanup Phases

### Phase 1: Remove Boot-specific Files (COMPLETED)

- ✅ **boot.properties** - Boot configuration file, no longer needed with deps.edn
- ✅ **build.boot** - Boot build file, replaced by build.clj and shadow-cljs.edn
- ✅ **dev.cljs.edn** - Figwheel configuration, replaced by shadow-cljs.edn
- ✅ **npm-shrinkwrap.json** - Older version of package-lock.json, redundant with modern npm

### Phase 2: Remove Perun-related Files (After Testing)

- **site/** directory - Contains Perun site configuration and content
  - site/perun.base.dev-builds.edn
  - site/perun.base.dev.edn
  - site/perun.base.prod.edn
  - site/perun.base.staging.edn
  - site/perun.base.test.edn
  - All content has been migrated to the content/ directory

### Phase 3: Remove Other Outdated Files (After Testing)

- **assets/js/cli.cljs.edn** - ClojureScript build configuration now handled by shadow-cljs
- **assets/js/main.cljs.edn** - ClojureScript build configuration now handled by shadow-cljs

### Phase 4: Code Cleanup (Ongoing)

- Any references to Boot-specific functions in the code
- Any Perun-specific code that's been replaced by Cryogen
- Devcards-related code if fully migrated to Workspaces

## Implementation Notes

- Phase 1 can be executed immediately as these files are directly related to Boot and are no longer needed
- Phases 2 and 3 should be executed after thorough testing to ensure all functionality has been properly migrated
- Phase 4 is an ongoing process and should be done gradually as part of regular development

## Verification Steps

After each phase:
1. Run the development server to ensure everything still works
2. Run tests to verify functionality
3. Build for production to ensure the build process is not affected
