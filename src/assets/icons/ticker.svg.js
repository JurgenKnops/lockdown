import { html } from 'htm/preact';

export const refresh = html`
  <svg
    role="img"
    aria-labelledby="srTicker"
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-refresh"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <title id="srTicker">updates</title>
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
  </svg>
`;
