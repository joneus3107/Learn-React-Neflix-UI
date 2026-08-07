import CardMovie from "./CardMovie"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SliderMovie() {

	return (
		<Swiper
		modules={ [Navigation, Pagination] }
			slidesPerView={2.3}
			spaceBetween={20}
			loop={true}
			breakpoints={{
				600: {
					slidesPerView: 3.5,
					spaceBetween: 35,
				},
				900: {
					slidesPerView: 4.3,
					spaceBetween: 40,
				},
				1200: {
					slidesPerView: 6,
				}
			}}
			autoplay={{
				delay: 5000,
			}}
			navigation
      pagination={{ clickable: true }}
			className="sliderMovie"
		>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>

			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
			<SwiperSlide><CardMovie/></SwiperSlide>
		</Swiper>
	)
}

export default SliderMovie
