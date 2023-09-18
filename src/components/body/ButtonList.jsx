import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import useFetchButtonList from "../../hooks/useFetchButtonList";
import ButtonCard from "./ButtonCard";


const ButtonList = ({ setVideoCategoryId }) => {
    const buttonList = useFetchButtonList()

    const sliderSettings = {
        infinite: true,
        speed: 400,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
    }

    if (!buttonList) return null

    return buttonList.length === 0 ? null : (
        <div className="fixed bg-white pl-5 pr-16 py-1 mx-3" >
            <ul className='' >
                <Slider {...sliderSettings} >

                    <button className=""   >
                        <li className=' bg-gray-100 text-gray-800 font-medium hover:cursor-pointer rounded-md py-1 px-4 mr-2' >

                            All
                        </li>
                    </button>
                    {
                        buttonList?.map((button) => <ButtonCard key={button.id} {...button} setVideoCategoryId={setVideoCategoryId} />)
                    }

                </Slider>
            </ul>

        </div>
    )
}

export default ButtonList
























/* // < div className = "mx-4 py-2 bg-gray-600" >
    <ul className='' >
        <Slider {...sliderSettings} >
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  '  >Home</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Shorts</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>History</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Trending</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Music</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Films</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Trending</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>liked</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Music</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Films</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Trending</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Music</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Films</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Music</li>
            <li className='bg-gray-100 text-gray-900 font-medium hover:cursor-pointer   rounded-md  1'>Films</li>
        </Slider>
    </ul>
    </ > */