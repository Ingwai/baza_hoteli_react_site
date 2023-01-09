import { useEffect } from 'react';

export default function useWebsiteTitle(title) {
	const setTitle = newTitle => (document.title = newTitle);

	useEffect(() => {
		title && setTitle(title);
	}, [title]);

	return setTitle;
}
