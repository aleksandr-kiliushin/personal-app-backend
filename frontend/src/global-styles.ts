import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --color-theme-1: steelblue;
    --color-theme-1-light: linear-gradient(
      90deg,
      var(--color-theme-1) -500%,
      white 50%,
      var(--color-theme-1) 600%
    );
    --gray: #555;
    --lightgray: lightgray;
    --navbar-height: 70px;
    --soft-black: #111;
    --soft-danger: indianred;
    --soft-gray: #777;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--soft-black);
    font-size: 1.1rem;
  }

  svg {
    fill: var(--soft-black);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }
`

export default globalStyles