const ImageComponent = ({ cdn }) => {
  return (
    <div>
      <img
        src={cdn}
        alt="thambbnail"
        className="w-full h-full rounded-xl hover:rounded-none "
        loading="lazy"
      />
    </div>
  )
}

export default ImageComponent
