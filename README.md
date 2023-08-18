In the root folder:
1. Run `npm/yarn/pnpm install`
2. Run `turbo dev`

After running `turbo dev` all the components from `/packages/shared` will be in the `/apps/test-app/components.d.ts`

Now, if you try to add one more shared component when vite is running - this won't be reflected in the `components.d.ts` of the `test-app`.
