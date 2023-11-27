/** Returns a promise that resolves after a random delay between 100-600ms */
export function randomDelay() {
  const delay = Math.floor((Math.random() * 500) + 100);
  return new Promise(((res) => setTimeout(res, delay)));
}