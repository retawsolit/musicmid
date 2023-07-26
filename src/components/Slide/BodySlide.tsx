import React, { useEffect, useState, useContext } from "react";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Playing from "../BodyPlay/Playing";
import { Link } from "react-router-dom";
import { AppProvider2, AppContext } from "../../Context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { updateNumber } from "../../redux/toggleSlice";
import { updateNumber1 } from "../../redux/toggleSlice1";
import { Avatar, List, Skeleton, Switch } from "antd";
import { BiPlay } from "react-icons/bi";
import "./SlidePaner.css";
const BodySlide = () => {
  const dispatch = useDispatch();
  const [data1, setData] = useState<any[]>([]);
  const [datatitle, setDatatitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { link1, setLink } = useContext(AppContext);
  const [dataChild, setDataChild] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://apisolfive.app.tranviet.site/v2/api/get/home"
      );
      setData(response.data?.data?.data?.items?.[11]?.items || []);
      setDatatitle(response.data?.data?.data?.items?.[11]?.title);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggle = () => {
    setLink(7);
    dispatch(updateNumber(11));
    dispatch(updateNumber1(dataChild));
  };
  // console.log(dataChild);
  // console.log(link1);
  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    //  slidesToShow: data1.length >= 6 ? 5 : 5,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const whiteSkeletonStyle = {
    backgroundColor: "#242526",
    color: "#18191a",
    height: "40%",
    width: "40%",
    marginLeft: "10px",
    borderRadius: "10px",
  };
  return isLoading ? (
    <div className="w-full h-100 flex justify-center items-center ">
      {" "}
      <Skeleton active style={whiteSkeletonStyle} />
      <Skeleton active style={whiteSkeletonStyle} />
      <Skeleton active style={whiteSkeletonStyle} />
      <Skeleton active style={whiteSkeletonStyle} />
      <Skeleton active style={whiteSkeletonStyle} />
    </div>
  ) : (
    <div className="w-full h-100">
      <div className="w-full h-20 flex items-center justify-start">
        <h1 className="text-white text-4xl font-bold">{datatitle}</h1>
      </div>
      <div className="w-full h-90">
        <Slider {...settings} className="w-full h-85 space-x-1">
          {data1.map((item: any, index) => (
            <div
              onMouseOver={() => setDataChild(index)}
              className="w-52 h-80 bg-transparent rounded-lg mx-10 gap-1 space-x-1"
              key={index}
            >
              {isLoading ? (
                <div className="flex justify-center relative group cursor-pointer">
                  {" "}
                  <Skeleton active style={whiteSkeletonStyle} />
                  <Skeleton active style={whiteSkeletonStyle} />
                  <Skeleton active style={whiteSkeletonStyle} />
                  <Skeleton active style={whiteSkeletonStyle} />
                  <Skeleton active style={whiteSkeletonStyle} />
                </div>
              ) : (
                <div className="flex justify-center relative group cursor-pointer">
                  {" "}
                  <img
                    src={item?.thumbnail}
                    alt=""
                    className="rounded-lg"
                  />{" "}
                  <div className="bg-[#linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0.000),rgba(0,0,0,0.000))] absolute bottom-3 right-14 w-fit h-fit z-10  justify-center items-center hidden group-hover:flex">
                    <Link
                      to={`/playlistmusic/${item?.encodeId}`}
                      onClick={toggle}
                    >
                      <div className="rounded-full hover:scale-125 bg-[#020202] p-1 hover:scale-125 flex items-center justify-center">
                        <BiPlay className="text-[#3e4140] font-medium text-3xl	 hover:text-white transition-all m-auto" />
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              <div className="flex justify-center h-14 mb-5">
                {" "}
                <div className="flex items-center">
                  {" "}
                  <div>
                    {" "}
                    <div className="flex justify-start my-1 mx-2">
                      <div className="flex justify-start">
                        <p className="text-white">{item?.title}</p>{" "}
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BodySlide;
