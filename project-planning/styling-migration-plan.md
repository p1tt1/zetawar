# Zetawar Styling Migration Plan

## Overview

This document outlines the plan to migrate Zetawar from using React Bootstrap to a more lightweight and maintainable styling approach. The migration will be done in phases to ensure stability throughout the process.

## Phase 1: Remove Bootstrap Dependencies

### Goals
- Remove all React Bootstrap dependencies
- Replace Bootstrap components with pure HTML/CSS equivalents
- Maintain all existing functionality
- Resolve peer dependency conflicts

### Implementation Steps

1. **Identify Bootstrap Components in Use**
   - Navbar/Navigation components
   - Modal dialogs
   - Buttons and button groups
   - Tables
   - Forms and form controls
   - Alerts
   - Progress bars

2. **Create Pure HTML/CSS Replacements**
   - Replace `ReactBootstrap.Navbar` with standard HTML nav elements
   - Replace `ReactBootstrap.Modal` with custom modal implementation
   - Replace other Bootstrap components with semantic HTML equivalents
   - Maintain existing CSS classes where possible for styling consistency

3. **Update Package Dependencies**
   - Remove `react-bootstrap` from package.json
   - Remove `bootstrap` CSS dependency if not needed
   - Update React to a consistent version (v18.x)

4. **CSS Adjustments**
   - Ensure all components have proper styling without Bootstrap
   - Maintain responsive design principles
   - Keep existing color schemes and visual identity

### Progress

- [x] Removed `react-bootstrap` and `bootstrap` from package.json
- [x] Updated the navbar component in `src/cljc/zetawar/views/common.cljc` to use pure HTML/CSS
- [x] Removed ReactBootstrap export from `zetawar-js-lib/index.js`
- [x] Created a mock implementation in `src/cljs/cljsjs/react_bootstrap.cljs` to maintain compatibility
- [x] Removed Bootstrap import from `src/scss/main.scss` and added custom CSS implementations
- [ ] Replace modal dialogs with custom implementation
- [ ] Update form elements and controls
- [ ] Replace remaining Bootstrap components
- [ ] Test thoroughly across different screen sizes

### Current Challenges

- Shadow-cljs is still trying to install reakit@^0.11.1 which has a peer dependency on react@^16.3.0, but we're using react@18.3.1
- Need to investigate where this dependency is coming from and how to override it

## Phase 2: Implement Tailwind CSS

After successfully removing Bootstrap and implementing pure HTML/CSS components, we will now adopt Tailwind CSS as our lightweight styling framework.

### Why Tailwind CSS

After evaluating the options, Tailwind CSS has been selected for the following reasons:

1. **Utility-first approach**
   - Provides a comprehensive set of utility classes
   - Reduces the need for custom CSS
   - Enables rapid UI development

2. **Performance benefits**
   - Smaller bundle size than Bootstrap
   - Can be configured to purge unused CSS
   - No JavaScript dependencies

3. **Compatibility with our stack**
   - Works well with ClojureScript/Reagent
   - Integrates with our existing PostCSS setup
   - Compatible with our shadow-cljs build process

4. **Developer experience**
   - Consistent design system
   - Reduces context switching between HTML and CSS files
   - Strong community support and documentation

### Implementation Plan

#### Phase 2.1: Setup and Configuration
1. Install Tailwind CSS and its dependencies
2. Configure Tailwind with PostCSS
3. Create a tailwind.config.js file with customizations to match our design
4. Update build scripts to process Tailwind

#### Phase 2.2: Core Component Migration
1. Replace custom container classes with Tailwind equivalents
2. Update typography styles using Tailwind
3. Implement responsive design using Tailwind's breakpoint utilities
4. Migrate layout components (grid, flexbox)

#### Phase 2.3: UI Component Migration
1. Replace custom button styles with Tailwind
2. Update form elements and controls
3. Implement modals using Tailwind
4. Migrate navigation components
5. Update tables, alerts, and other UI elements

#### Phase 2.4: Game-Specific Components
1. Adapt game board and tile styling
2. Update unit and terrain visualization
3. Refine game controls and interfaces
4. Ensure game-specific styling is preserved

#### Phase 2.5: Testing and Refinement
1. Test across different screen sizes
2. Ensure consistent appearance across browsers
3. Optimize for performance
4. Document the new styling approach

## Implementation Timeline

### Phase 1: Remove Bootstrap ✓
1. Create pure HTML/CSS navbar component ✓
2. Replace modal dialogs with custom implementation ✓
3. Update form elements and controls ✓
4. Replace remaining Bootstrap components ✓
5. Test thoroughly across different screen sizes ✓
6. Remove Bootstrap dependencies from project ✓

### Phase 2: Implement Tailwind CSS (Current)
1. Setup and configuration ✓
2. Core component migration ✓
3. UI component migration (In Progress)
4. Game-specific component adaptation (In Progress)
5. Testing and refinement

### Completed Tailwind Migrations

The following components have been successfully migrated to use Tailwind CSS:

1. **Core Layout Components**
   - Container layout with responsive padding and margins
   - Flex-based layouts for better responsiveness
   - Responsive grid system for game interface
   - Navbar component with proper mobile responsiveness
   - Footer component with consistent styling

2. **UI Components**
   - Modal dialog system with proper styling and animations
   - Alert components with contextual styling (success, info, warning, danger)
   - Button styling with hover and focus states
   - Form controls including select inputs

3. **Game Interface Components**
   - Faction credits display with improved typography
   - Faction status bar with better spacing and link styling
   - Status information panel with responsive design
   - Faction list with improved visual hierarchy

4. **Cleanup**
   - Removed legacy `src/scss/main.scss` file as it's no longer needed
   - All styles now use Tailwind's utility classes or are defined in `src/scss/tailwind.scss`
   - Converted Bootstrap-specific classes to Tailwind equivalents

## Next Steps

1. Fix the "Configure faction: {Missing key [object Object]}" issue in the game interface

2. Refine responsive behavior for mobile devices
   - Ensure proper stacking on small screens
   - Adjust font sizes and spacing for mobile

3. Optimize Tailwind configuration
   - Purge unused CSS classes
   - Further customize color palette to match game theme
   - Create component-specific utility classes if needed

## Conclusion

This phased approach allows us to immediately resolve the peer dependency conflicts while maintaining all functionality. It also provides a path forward to a more lightweight and maintainable styling solution in the future.
