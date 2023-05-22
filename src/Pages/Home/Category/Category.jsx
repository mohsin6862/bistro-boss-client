import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div className="my-8">
               <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"order online"}
                ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
             
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className="text-3xl text-center  -mt-16 uppercase text-white shadow">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className="text-3xl text-center  -mt-16 uppercase shadow text-white">pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className="text-3xl text-center  -mt-16 uppercase shadow text-white">Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className="text-3xl text-center  -mt-16 uppercase shadow text-white">dessert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className="text-3xl text-center  -mt-16 uppercase shadow text-white">Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Category;


