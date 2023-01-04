import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({ galleries }) {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink exact to="/">
						Home
					</NavLink>
				</li>
				{galleries.map(item => (
					<li key={item.id}>
						{console.log(item.theme)}
						<NavLink to={`/galleries/${item.id}`}>
							{item.theme ? item.theme.replaceAll("â€“", "-") : null}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default GalleryNavigation;
