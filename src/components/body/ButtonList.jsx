import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import useFetchButtonList from "../../hooks/useFetchButtonList";
import ButtonCard from "./ButtonCard";
import { useState } from "react";

const ButtonList = ({ setVideoCategoryId }) => {
  const [selectedbutton, setSelectedButton] = useState("");

  const handleButtonClick = (id) => {
    setVideoCategoryId(id);
    setSelectedButton(id);
  };
  const buttonList = useFetchButtonList();

  const sliderSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  if (!buttonList) return null;

  return buttonList.length === 0 ? null : (
    <div className="fixed bg-[#0f0f0f] mx-8 pl-5 pr-10 py-2">
      <ul className="">
        <Slider {...sliderSettings}>
          <button className="">
            <li
              className={
                selectedbutton === ""
                  ? "bg-gray-50 text-gray-900 hover:cursor-pointer rounded-md py-1 px-4 mr-2"
                  : "hover:cursor-pointer rounded-md py-1 px-4 mr-2  bg-zinc-800 text-gray-50"
              }
              onClick={() => handleButtonClick("")}
            >
              All
            </li>
          </button>
          {buttonList?.map((button) => (
            <ButtonCard
              key={button.id}
              {...button}
              handleButtonClick={handleButtonClick}
              selectedbutton={selectedbutton}
            />
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default ButtonList;

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
