import { useEffect } from "react";
import { BUTTON_LIST_API, YOUTUBE_API_KEY } from "../common/config";
import { useSelector, useDispatch } from "react-redux";
import { addButtonList } from "../features/buttonListSlice";

const useFetchButtonList = () => {
  const { buttonList } = useSelector((store) => store.buttonList);
  const dispatch = useDispatch();

  useEffect(() => {
    getButtonList();
  }, []);

  const getButtonList = async () => {
    const data = await fetch(BUTTON_LIST_API + YOUTUBE_API_KEY);
    const json = await data.json();
    if (json?.items) {
      dispatch(addButtonList(json?.items));
    }
  };

  return buttonList;
};

export default useFetchButtonList;
