export const api = <T = any>(url: string) =>
  fetch(`http://localhost:3001${url}`).then((res) => res.json() as T);
