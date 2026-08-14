import { useEffect, useState } from "react"

export const useDebounce = (keyword, delay = 1000) => {
	const [debounceVal, setDebounceVal] = useState('');

	useEffect(() => {
		const timer = setTimeout(()=>{
			setDebounceVal(keyword)
		}, delay)

		return () => clearTimeout(timer)
	}, [keyword, delay])

	return debounceVal
}