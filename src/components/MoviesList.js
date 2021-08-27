import React from "react";
import MovieDetails from "./MovieDetails";

class MoviesList extends React.Component {
	render() {
		const shows = this.props.shows;
		const allFavorites = this.props.allFavorites;

		return shows.map((record) => {
			const showId = record.show.id;

			//TODO: Check if the showId is already in the favorites list
			let addedToFavorites = false;

			return (
				<MovieDetails
					onFavoriteClick={this.props.updateFavoritesList}
					showId={showId}
					show={record}
					addedToFavorites={addedToFavorites}
					allShows={shows}
				/>
			);
		});
	}
}

export default MoviesList;
