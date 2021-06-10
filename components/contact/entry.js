import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { formatTitle } from '../../lib/text'

export default function Entry({ data }) {
  const { article, slug } = data.fields
  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-style-none">{children}</ul>,
    },
  }

  return (
    <article className={slug + " soft-breaks"}>
      {documentToReactComponents(article, options)}
    </article>
  )
}
