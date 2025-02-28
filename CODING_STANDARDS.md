# RepMax Coding & UI Standards

## TypeScript & React Guidelines

### TypeScript
- Always use TypeScript for type safety
- Define interfaces for all data structures
- Use type inference when types are obvious
- Avoid `any` type - use proper typing
- Use `unknown` over `any` when type is uncertain

### React Components
- Use functional components with hooks
- Add "use client" directive for client components
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks
- Implement proper error boundaries
- Use proper React.memo() for optimization

### State Management
- Use React hooks appropriately:
  - useState for local state
  - useEffect for side effects
  - useCallback for memoized functions
  - useMemo for expensive computations
- Avoid prop drilling - use context when needed
- Keep state as local as possible

## UI/UX Standards

### Colors
- Brand Colors:
  - Yellow: `#F7A800`
  - Black: `#000000`
  - White: `#FFFFFF`
- Usage:
  - Primary Actions: Yellow
  - Text: Black or White (based on contrast)
  - Backgrounds: Black or White

### Typography
- Font Families: 
  - Primary: Poppins
  - Secondary: Inter
- Headings:
  - H1: `text-5xl lg:text-6xl font-bold`
  - H2: `text-4xl font-bold`
  - H3: `text-2xl font-bold`
  - H4: `text-xl font-bold`
- Body Text:
  - Regular: `text-base`
  - Small: `text-sm`
  - Tiny: `text-xs`

### Spacing
- Use Tailwind's spacing scale
- Common margins:
  - Sections: `py-20`
  - Components: `space-y-8`
  - Elements: `mb-4`, `mt-2`
- Padding:
  - Cards: `p-6` or `p-8`
  - Buttons: `px-4 py-2` or `px-6 py-3`

### Components

#### Buttons
```tsx
// Primary Button
<Button className="bg-[#F7A800] text-black hover:bg-[#e09700]">
  Primary Action
</Button>

// Secondary Button
<Button variant="outline" className="border-gray-200">
  Secondary Action
</Button>
```

#### Cards
```tsx
<Card className="p-6 hover:shadow-lg transition-shadow">
  <div className="space-y-4">
    {/* Card content */}
  </div>
</Card>
```

#### Forms
```tsx
<form className="space-y-6">
  <div className="space-y-2">
    <Label>Field Label</Label>
    <Input className="w-full" />
  </div>
</form>
```

### Layout
- Use CSS Grid for complex layouts
- Flexbox for simpler alignments
- Maintain consistent max-width:
  - Content: `max-w-7xl mx-auto`
  - Text blocks: `max-w-3xl`
- Responsive design:
  - Mobile-first approach
  - Common breakpoints:
    - sm: 640px
    - md: 768px
    - lg: 1024px
    - xl: 1280px

### Animation
- Use subtle transitions:
  - Hovers: `transition-colors duration-200`
  - Transforms: `transition-transform duration-300`
- Maintain accessibility:
  - Respect reduced motion preferences
  - Keep animations subtle and purposeful

## Code Organization

### File Structure
```
/components
  /ui          # Reusable UI components
  /features    # Feature-specific components
  /layouts     # Layout components
/lib          # Utilities and helpers
/hooks        # Custom React hooks
/types        # TypeScript types/interfaces
/styles       # Global styles
/public       # Static assets
```

### Naming Conventions
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- CSS classes: kebab-case
- Database tables: snake_case

### Import Order
1. React and Next.js imports
2. Third-party libraries
3. Local components
4. Hooks and utilities
5. Types and interfaces
6. Styles

## Performance Guidelines

### Optimization
- Implement proper code splitting
- Use Next.js Image component for images
- Lazy load components when appropriate
- Memoize expensive computations
- Optimize re-renders with proper hooks usage

### Security
- Implement proper authentication checks
- Use HTTPS for all external requests
- Sanitize user inputs
- Follow OWASP security guidelines
- Use proper Content Security Policy

## Testing Standards
- Write tests for critical functionality
- Use React Testing Library
- Follow AAA pattern (Arrange, Act, Assert)
- Test user interactions and edge cases
- Maintain good test coverage

## Git Workflow
- Use descriptive commit messages
- Follow conventional commits
- Create feature branches
- Review code before merging
- Keep PRs focused and manageable

## Documentation
- Document complex logic
- Add JSDoc comments for functions
- Keep README up to date
- Document API endpoints
- Include setup instructions