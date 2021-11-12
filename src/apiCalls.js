export function getCostumers() {
  return fetch('/data.json').then((response) => response.json());
}
