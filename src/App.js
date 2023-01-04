import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView/GalleryView";
import HomeView from "./components/HomeView/HomeView";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ArtDescription from "./components/ArtDescription/ArtDescription";
import { Switch, Route } from "react-router-dom";
function App() {
	return (
		<div className="main-content">
			<GalleryNavigation galleries={harvardArt.records} />
			<Switch>
				<Route exact path="/">
					<HomeView />
				</Route>
				<Route exact path="/galleries/:galleryId">
					<GalleryView galleries={harvardArt.records} />
				</Route>
				<Route path="/galleries/:galleryId/art/:artId">
					<ArtDescription galleries={harvardArt.records} />
				</Route>
				<Route path="/not-found">
					<PageNotFound />
				</Route>
				<Route>
					<PageNotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
