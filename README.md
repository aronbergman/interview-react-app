This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Debug

For debugging in JetBrains – add confuration Node.js
```
Application parameters: node_modules/cross-env/src/bin/cross-env-shell.js 'npx concurrently -p '{name}' -n 'debugger,now-cli' -c 'gray.bgWhite,yellow.bgBlue' \"node --inspect-brk node_modules/.bin/now\" \"yarn dev\"'
```
More details: https://github.com/zeit/now/issues/2077
