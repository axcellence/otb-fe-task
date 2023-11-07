# On The Beach — task 2023

## Tech stack
- Vite (build tool)
- React (UI)
- Zustand (state management)
- CSS Modules (styling)
- Tanstack Query (data loading and caching)
- Vitest (testing)
- Testing Library (UI testing) 
- Zod (data validation and type checking)

### Why
Vite is super quick, `create-react-app` essentially defunct and requires said no server-side so no Next.js. Zustand has a great API for managing state. React-query is the gold standard. Zod to validate data from API calls is what is expected and maintain type-safety. Vitest over Jest because Vite.

## General Structure

```
├── public/
├── src/
│   ├── components/          # Colocated styles with components
│   ├── data/                # Local JSON data
│   ├── hooks/               # Custom react hooks
│   ├── schemas/             # For data validation
│   ├── stores/              # Shared state between components
│   ├── utils/               # Utility functions
│       └── helpers.test.ts  # Tests
└── README.md                # Project README (this file)
```

## Caveats / notes

- I have put the `<QueryClientProvider />` inside the `<Results />` component as the requirements states _"Imagine this will be a component added to a large website"_ and that is the entry point for my component structure. However, typically I would put this in the `App.tsx` to wrap the whole application.
- I don't like the style approach with CSS modules. I much prefer Tailwind CSS. I think TW is a better direction for styling overall. It's enables faster prototyping, less mental overhead, less files, smaller CSS bundles and more.
- I've not written tests every single part of the app but I've got 10 tests in place including testing functions and UI.
- "Attendees" don't make sense as they're all different but in product the would all be the same as per state passed from the previous view. However, I've matched the design file.
- The chevron in the read more button is the wrong direction from a UX point of view as point right indicates it will go to another page. Down would better represent an accordion. However, I've matched the design file.

## Run project

I've used `bun` but works fine with `npm`

```
bun run install
```

### Dev

```
bun run dev
```

### Testing

```
bun run test
```

### Build

```
bun run build
```

### Serve

```
bun run preview
```
