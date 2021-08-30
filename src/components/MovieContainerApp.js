import React from "react";
import MoviesList from "./MoviesList";

class MovieContainerApp extends React.Component {
	state = {
		loading: false,
		data: [],
		favorites: [],
	};

	getData = () => {
		this.setState({ loading: true });
		fetch("http://api.tvmaze.com/schedule?country=US")
			.then((response) => response.json())
			.then((results) => {
				this.setState({ data: results });
			})
			.finally((e) => {
				this.setState({ loading: false });
			});
	};

	updateFavoritesList = (showId) => {
		//TODO: Add the logic to add or remove tv shows from the favorites list
		//If the show is in the list, remove it, otherwise add it
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: "10px" }}>
				<div
					className='ui segment'
					style={{
						textAlign: "center",
						color: "teal",
						fontSize: "30px",
					}}>
					TV Shows
				</div>
				<div className='ui segment'>
					<div className='ui three column grid'>
						<MoviesList
							updateFavoritesList={this.updateFavoritesList}
							allFavorites={this.state.favorites}
							shows={this.state.data}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieContainerApp;