# User Directory (CRUD)

A simple React + TypeScript + Vite CRUD app for managing users.

## Tech Stack

- React
- TypeScript
- Vite
- Axios
- Formik

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Add environment file:

```env
VITE_API_URL=http://localhost:3000
```

3. Start dev server:

```bash
npm run dev
```

## Common API Setup

We created a shared API file so base URL is configured once and reused globally.

- Common file: [src/common/api.ts](src/common/api.ts)
- Service usage: [src/services/userService.ts](src/services/userService.ts)

Current shared API config:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

## Form Handling with Formik

We switched user form handling to Formik.

- Form component: [src/components/UserForm.tsx](src/components/UserForm.tsx)
- Uses:
  - `useFormik()`
  - `initialValues`
  - `formik.handleChange`
  - `formik.handleSubmit`

## What We Completed Today

1. Discussed and implemented Formik usage in the user form.
2. Added/used a common API file to avoid repeating base URL setup.
3. Standardized API base URL to come from `.env` using `VITE_API_URL`.
4. Updated guidance for cleaner project structure (`common` usage).
5. Clarified `baseURL` is an Axios option and not a global built-in.

## Notes

- Keep all API calls through [src/common/api.ts](src/common/api.ts).
- Prefer importing `api` in service files instead of direct `axios` usage.
