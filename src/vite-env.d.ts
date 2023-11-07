/// <reference types="vite/client" />
// typings.d.ts or vite-env.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
