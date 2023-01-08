import { Outlet, NavLink } from 'react-router-dom';
import { useResolvedPath } from 'react-router-dom';

export default function Profile(props) {
	const url = useResolvedPath('').pathname;
	return (
		<div className='card'>
			<div className='card-header'>
				<h2>MÓJ PROFIL</h2>
			</div>
			<div className='card-body'>
				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						<NavLink end className='nav-link' to={`${url}`}>
							Profil
						</NavLink>
						{/* end zmienia wyłącza aktywność linku gdy zmienimy na inny */}
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to={`${url}/hotele`}>
							Hotele
						</NavLink>
					</li>
				</ul>
				<div className='pt-4'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
