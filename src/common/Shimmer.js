const Shimmer = () => {
  return (
    <>
      {' '}
      {Array(15)
        .fill('')
        .map((e, i) => {
          return <div key={i} className="bg-gray-100 w-64 h-72"></div>
        })}
    </>
  )
}

export default Shimmer
