import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

const Hotel = props => {
	const { id } = useParams();
	const [hotel, setHotel] = useState(null);

	const [loading, setLoading] = useState(true);

	const fetchHotel = () => {
		setHotel({
			id: 2,
			name: 'Pod dębami',
			city: 'Krosno',
			rating: 8.8,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam eum dolorem voluptatibus esse, odiplaceat cum! Et iure voluptatibus sit, praesentium cupiditate molestias explicabo repudiandae earum dicta	nam illo! Pariatur tempore exercitationem dolore rem, numquam tempora aperiam debitis, quae necessitatibus nihil veniam tenetur consectetur ab! Sapiente, minima ad illum deserunt quos incidunt quaerat. Perferendi qui aspernatur a sint ipsa.',
			image: { img: props.kro },
		});
		setLoading(false);
	};

	useEffect(() => {
		setTimeout(() => {
			fetchHotel();
		}, 500);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return loading ? <LoadingIcon /> : <h1>Hotel: {hotel.name}</h1>;
};

export default Hotel;
