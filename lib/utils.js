export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function objectToInlineList(items) {
  if (items.length === 1) return items[0]

  const list = items.map((item, i) => {
    if (i === items.length - 1) {
      return `and ${item}`
    } else if (i === items.length - 2) {
      return `${item} `
    } else {
      return `${item}, `
    }
  })

  return list.join("")
}
