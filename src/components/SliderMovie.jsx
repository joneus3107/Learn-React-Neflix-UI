import CardMovie from "./CardMovie"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SliderMovie({ data }) {

	return (
		<Swiper
		modules={ [Navigation, Pagination, Autoplay] }
			slidesPerView={2.3}
			spaceBetween={5}
			loop={true}
			breakpoints={{
				600: {
					slidesPerView: 3.5,
					spaceBetween: 15,
				},
				900: {
					slidesPerView: 4.3,
					spaceBetween: 25,
				},
				1200: {
					slidesPerView: 6,
					spaceBetween: 25,
				}
			}}
			autoplay={{
				delay: 5000,
				pauseOnMouseEnter: true,
				disableOnInteraction: false,
			}}
			navigation
      pagination={{ clickable: true }}
			className="sliderMovie"
		>
			{ data.map(i => <SwiperSlide key={data.id}><CardMovie data={i} /></SwiperSlide>) }
		</Swiper>
	)
}

export default SliderMovie
