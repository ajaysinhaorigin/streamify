const Shimmer = () => {
  return (
    <>
      {Array(15)
        .fill('')
        .map((e, i) => {
          return (
            <div key={i}>
              <div className="bg-zinc-800 rounded-xl w-80 h-44 mb-3"></div>
              <div className="flex items-center">
                <div className=" bg-zinc-800  h-10 w-10 rounded-full mr-2"></div>
                <div className="">
                  <p className=" bg-zinc-800 w-64 h-4 mb-2"></p>
                  <p className=" bg-zinc-800 h-4 w-52"></p>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Shimmer
