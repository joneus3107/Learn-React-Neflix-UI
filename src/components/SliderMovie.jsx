import CardMovie from "./CardMovie"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SliderMovie({ data }) {

	return (
		<Swiper
		modules={ [Navigation, Pagination] }
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
			navigation
      pagination={{ clickable: true }}
			className="sliderMovie"
		>
			{ data.map(i => <SwiperSlide key={data.id}><CardMovie data={i} /></SwiperSlide>) }
		</Swiper>
	)
}

export default SliderMovie
