import React from 'react'

const CommentsCard = ({ data }) => {
    return (
        <>
            <div className='flex py-2 px-2 bg-gray-200 my-2 rounded-lg' >
                <img className='h-5 mt-1 pr-2' src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user" />
                <div>
                    <h1 className='font-bold' >{data.name}</h1>
                    <h1>{data.title}</h1>
                </div>
            </div>
            <div className='ml-6'>
                {
                    data.replies?.map((comment, i) => <CommentsCard key={i} data={comment} />)
                }
            </div>
        </>

    )
}

export default CommentsCard