# React-TODO (hook-app)

Collection of small React exercises, one per hook (`useState`, `useEffect`, `useRef`, `useLayoutEffect`, `useMemo`/`useCallback`, `useReducer`), plus custom hooks. The entry point currently renders a to-do list built with `useReducer`.

> Learning project built in December 2020 - January 2021 while practicing Create React App and the React hooks introduced in React 16.8. Kept public as part of my learning history.

## What it does

`src/components/` is organized in numbered folders that each isolate one hook: `01-useState` (counters), `02-useEffect` (forms, custom hooks), `03-examples` (combining custom hooks), `04-useRef`, `05-useLayoutEffect`, `06-memos` (`useMemo`/`useCallback`), `07-tarea-memo` (parent/child memoization), and `08-useReducer` (the to-do app). `src/index.js` mounts whichever component is currently uncommented — right now that's `TodoApp` from `08-useReducer`, which adds/toggles/deletes todos via a reducer and persists the list to `localStorage`. `src/hooks/` holds reusable custom hooks (`useCounter`, `useFetch`, `useForm`).

## Tech Stack

- React 17 / React DOM 17
- Create React App (`react-scripts` 4.0.1)
- Testing Library (Jest DOM, React, user-event) — scaffolded, no custom tests added

## Running Locally

```
yarn install
yarn start        # http://localhost:3000
```

- `yarn build` — production build into `build/`
- `yarn test` — runs the CRA test runner

To view a different exercise, edit `src/index.js` and swap which component is imported/rendered.

## What I practiced

- Core React hooks: `useState`, `useEffect`, `useRef`, `useLayoutEffect`, `useMemo`, `useCallback`, `useReducer`
- Writing and composing custom hooks (`useCounter`, `useFetch`, `useForm`)
- State persistence to `localStorage`
- Component memoization for render performance (`React.memo`, `useMemo`)
