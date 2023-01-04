import { useHistory, useParams } from "react-router-dom";
import "./GalleryView.css";
import ArtImageTile from "../ArtImageTile/ArtImageTile.js";

function GalleryView({ galleries }) {
	const { galleryId } = useParams();
	const gallery = galleries.find(item => item.id === +galleryId);
	const history = useHistory();
	if (!gallery) {
		history.push("/not-found");
		return;
	}
	let { name, theme, labeltext } = gallery;

	const artworks = gallery.objects;

	return (
		<div className="page-wrapper">
			<h1>{theme.replaceAll("â€“", "-")}</h1>
			<h2>{name.replaceAll("â€“", "-")}</h2>
			<p>
				{labeltext
					.replaceAll("â€™", "'")
					.replaceAll("â€”", "—")
					.replaceAll("â€“", "-")}
			</p>

			{artworks.map(item => (
				<ArtImageTile key={item.id} art={item} galleryId={+galleryId} />
			))}
		</div>
	);
}
export default GalleryView;
