import { Link } from "react-router-dom";
import "./ArtImageTile.css";

function ArtImageTile({ art, galleryId }) {
	return (
		<div className="art-image-tile">
			<Link to={`/galleries/${galleryId}/art/${art.id}`}>
				<h3>{art.title}</h3>
			</Link>
			<img src={art.primaryimageurl} alt={art.title} />
		</div>
	);
}

export default ArtImageTile;
