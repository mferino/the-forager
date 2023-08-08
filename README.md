Hello and thanks for checking out my project!!

The steps for running this project are the same as a standard
nextjs project.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

If you want to use the backend on its own send a `POST` request to `http://localhost:3000/api`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

```bash
/the-forager/
|
|--/__tests__/
|  |- route.post.tests.ts  # test file using jest
|
|--/components/            # components live here
|  |- highlighter.tsx      # highlighter component
|
|--/app/
|  |- layout.tsx           # layout for main page
|  |- page.tsx             # main page
|  |
|  |--/api/
|     |- route.helpers.ts  # helper functions
|     |- route.ts          # main route file
|     |- route.types.ts    # types for the route
```