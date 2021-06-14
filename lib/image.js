const MAX_WIDTH = 2280

export const Img = ({ src, alt = "", width, height, lazy = false, className }) => {
  const mediaSizes = [320, 640, 1024, 1280, 1440, 2280]
  const aspectRatios = ["1x", "2x", "3x"]
  const sources = mediaSizes.map(size => (
    {
      width: size,
      height: (height / width) * size,
    }
  ))

  return (
      <picture>
        {
          sources.map((source, i) => (
          <source
            key={i}
            media={`(max-width: ${source.width / 2}px)`}
            srcSet={`${src}?fm=jpg&fl=progressive&w=${source.width}&h=${Math.floor(source.height)}`}
          />
        ))}
        <img
          className={className}
          src={`${src}?fm=jpg&fl=progressive`}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          width={width < MAX_WIDTH ? width : MAX_WIDTH}
          height={width < MAX_WIDTH ? height : Math.floor((height / width) * MAX_WIDTH)}
          />
      </picture>
  )
}
