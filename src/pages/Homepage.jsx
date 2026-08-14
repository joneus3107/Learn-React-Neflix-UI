// import React from 'react'
import { MainVisual, SectionSlider, LoadingScreen } from '../components'
import {useHomeMovie} from '../hooks/useHomeMovie'

function Homepage() {
	const { data, error, loading } = useHomeMovie();
	if(loading) return <LoadingScreen/>
	if (error) return <p>Could not load movies.</p>;

	const nowPlaying = data.nowPlaying.slice(0, 10);
	const popular = data.popular.slice(0, 10);
	const topRated = data.topRated.slice(0, 10);
	const upComing = data.upcoming.slice(0, 10);

	return (
		<>
			<MainVisual data={data.topRated[0]}/>
			<SectionSlider title="Phim mới nhất" data={nowPlaying} />
			<SectionSlider title="Có thể bạn sẽ thích" data={popular} />
			<SectionSlider title="Được đánh giá cao" data={topRated} />
			<SectionSlider title="Sắp chiếu" data={upComing} />
		</>
	)
}

export default Homepage
