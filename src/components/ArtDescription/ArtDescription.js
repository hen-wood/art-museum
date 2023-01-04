import { useParams, Link } from "react-router-dom";
import "./ArtDescription.css";
function ArtDescription({ galleries }) {
	const { galleryId, artId } = useParams();
	const gallery = galleries.find(item => item.id === +galleryId);
	const art = gallery.objects.find(item => item.id === +artId);
	let description = art.description;
	if (!art.description) {
		description = "No description for this piece.";
	}
	return (
		<div className="art-description">
			<h1>{art.title}</h1>
			<p>{description}</p>
			<img src={art.primaryimageurl} alt={description} />
			<Link to={`/galleries/${galleryId}`}>
				<p>Back To {gallery.theme.replaceAll("â€“", "-")}</p>
			</Link>
		</div>
	);
}

export default ArtDescription;
