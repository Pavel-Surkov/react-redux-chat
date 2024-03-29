import { useEffect, useState } from 'react';

function useMediaQuery(query) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const matchQueryList = window.matchMedia(query);

		function handleChange(e) {
			setMatches(e.matches);
		}

		setMatches(matchQueryList.matches);

		matchQueryList.addEventListener('change', handleChange);

		return () => {
			matchQueryList.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
}

export default useMediaQuery;
