const ImageComponent = ({ cdn }) => {
  return (
    <div>
      <img
        src={cdn}
        alt="thambbnail"
        className="w-full h-full rounded-lg hover:rounded-none"
        loading="lazy"
      />
    </div>
  )
}

export default ImageComponent
