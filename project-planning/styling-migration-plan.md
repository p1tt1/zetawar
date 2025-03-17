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

## Phase 2: Implement Lightweight Styling Framework (Future)

After successfully removing Bootstrap and implementing pure HTML/CSS components, we can evaluate lightweight styling frameworks for potential adoption.

### Framework Options

1. **Tailwind CSS**
   - Utility-first approach
   - Highly customizable
   - Good integration with React
   - Smaller bundle size than Bootstrap

2. **Pure CSS**
   - Extremely lightweight
   - Modular approach
   - Simple grid system
   - No JavaScript dependencies

3. **Bulma**
   - Modern CSS framework
   - Flexbox-based
   - No JavaScript dependencies
   - Clean, readable syntax

### Selection Criteria
- Bundle size and performance impact
- Ease of integration with ClojureScript/Reagent
- Community support and documentation
- Compatibility with existing design
- Maintenance requirements

## Implementation Timeline

### Phase 1: Remove Bootstrap
1. Create pure HTML/CSS navbar component ✓
2. Replace modal dialogs with custom implementation
3. Update form elements and controls
4. Replace remaining Bootstrap components
5. Test thoroughly across different screen sizes
6. Remove Bootstrap dependencies from project

### Phase 2: Evaluate and Implement New Framework (if needed)
1. Evaluate candidate frameworks against selection criteria
2. Create proof-of-concept with selected framework
3. Develop migration strategy
4. Implement framework incrementally
5. Test and refine implementation

## Next Steps

1. Identify and fix the reakit dependency issue
2. Continue replacing Bootstrap components with pure HTML/CSS equivalents
3. Focus on modal dialogs next, as they are commonly used in the application
4. Update the CSS to maintain the look and feel without Bootstrap

## Conclusion

This phased approach allows us to immediately resolve the peer dependency conflicts while maintaining all functionality. It also provides a path forward to a more lightweight and maintainable styling solution in the future.
