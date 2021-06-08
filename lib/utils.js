export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
