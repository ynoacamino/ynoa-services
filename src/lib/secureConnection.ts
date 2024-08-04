export const secureFetch = (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => fetch(input, {
  ...init,
  headers: {
    ...init?.headers,
    'Secret-Connection': process.env.CONNECTION_SECRET,
  },
});
