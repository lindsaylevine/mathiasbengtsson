import Markdown from 'react-markdown'

export function formatTitle(title) {
  return (
    <Markdown components={{p: 'span'}} source={title} />
  )
}
