import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('/public/Review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="my-20">
            <SectionTitle
                subHeading={"Our clients say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(r => <SwiperSlide key={r._id}><div className="text-center flex flex-col items-center m-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={r?.rating}
                                readOnly
                            />
                            <p className="text-xl my-5">{r?.details}</p>
                            <h1 className="text-3xl font-semibold text-amber-600">{r?.name}</h1>
                        </div></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Review;