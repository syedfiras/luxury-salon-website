# LUXE Studio

Production-oriented Next.js site for a calm luxury salon and spa atelier.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- Built with the Next.js App Router.
- Remote imagery is limited to `images.unsplash.com` in `next.config.ts`.
- Motion is reduced automatically for users with `prefers-reduced-motion: reduce`.
- The production build should be verified with `npm run build` before deployment.

## Current Deployment Caveat

The project includes an ESLint config, but the local install currently does not include `eslint` or `eslint-config-next`.
Install those dev dependencies before treating lint as a passing release gate.
