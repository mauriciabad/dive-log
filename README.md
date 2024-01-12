<img height="128" align="right" src="src/assets/brand-image-round-corners.png" />
  
[![Vercel](https://vercelbadge.vercel.app/api/mauriciabad/dive-log)](https://vercel.com/mauriciabad/dive-log) [![Website](https://img.shields.io/website?down_color=red&down_message=down&up_color=blue&up_message=avilable&url=https%3A%2F%2Fdivelog.vercel.app)](https://divelog.vercel.app) [![Stars](https://img.shields.io/github/stars/mauriciabad/dive-log?style=social)](https://github.com/mauriciabad/dive-log)

# <img height="32" src="src/assets/logo/logo-outline.svg" /> Dive Log

:diving_mask: Easy to use Dive Logbook for Scuba Divers.

Use here: <https://divelog.vercel.app/>

## Develop

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

The main technologies used are:

- [TypeSctipt](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

### Contributions

PRs are welcome :smile:

> There's a [TODO.md](/TODO.md) file with the pending tasks.

### Commands

```zsh
# Setup
npm i

# Run in dev mode
npm run dev

# Lint
npm run lint

# Build
npm run build

# Tests
npm run test
```

### DB

The database is hosted on PlanetScale. Here you can update the schema by creating a Deploy request from the `dev` branch after you run `npx prisma db push`:

- **DB hosting**: <https://app.planetscale.com/mauri/dive-log>

To view the contents of the db, use the Prisma Data Platform:

- **Production db**: <https://cloud.prisma.io/mauriciabad/dive-log/production/databrowser>
- **Development db**: <https://cloud.prisma.io/mauriciabad/dive-log/development/databrowser>

You can also run Prisma studio locally with the following command. It will load the db based on your `DATABASE_URL` environment variable from the `.env` file.

```zsh
npx prisma studio
```

### Environment variables

To connect to the database and authentication providers, you need a `.env` file in the root. This file is private and the only way to get it is to ask someone that has it to send it to you, in this case, the maintainers of the project.

For authenication to work, at least one set of client ID and client secret needs to be set.

FIXME Add to schema and validation logic.

```
DISCORD_CLIENT_ID
DISCORD_CLIENT_SECRET
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
FACEBOOK_CLIENT_ID
FACEBOOK_CLIENT_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
```

  Maintainers:
  
  - [@mauriciabad](https://github.com/mauriciabad/)
  
  ### Backend server
  
  We use Vercel as the backend server:
  
  
  GITHUB_CLIENT_SECRET: z.string(),

Maintainers:

- [@mauriciabad](https://github.com/mauriciabad/)

### Backend server

We use Vercel as the backend server:

- **Backend server**: <https://vercel.com/mauriciabad/dive-log>
