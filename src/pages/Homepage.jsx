// import React from 'react'
import { CircularProgress } from '@mui/material'
import { MainVisual, SectionSlider } from '../components'
import {useHomeMovie} from '../hooks/useHomeMovie'

function Homepage() {
	const { data, error, loading } = useHomeMovie();
	if(loading) return <CircularProgress/>
	if (error) return <p>Could not load movies.</p>;
	return (
		<>
			<MainVisual data={data[0]}/>
			<SectionSlider title="Phim mới nhất" />
		</>
	)
}

export default Homepage
