import React from "react";
import AddToFavoritesButton from "./AddToFavoritesButton";

class MovieDetails extends React.Component {
	render() {
		const record = this.props.show;

		const showId = this.props.showId;

		const handleFavorites = (key) => (event) => {
			this.props.onFavoriteClick(key);
		};

		return (
			<div
				className="ui teal placeholder segment"
				key={showId}
				style={{
					marginLeft: "70px",
					marginTop: "10px",
					gridGap: "0 5px",
				}}
			>
				<img
					className='ui medium rounded image'
					src={record.show.image && record.show.image.original}
					style={{width: "350px"}}
				/>
				<div className="ui teal segment">
					<h4
						className='ui header'
						style={{color: "teal", padding: "5px"}}>
						<center>{record.show && record.show.name}</center>
						<br/>
					</h4>
					<table
						className="ui celled table"
						style={{
							fontSize: 10,
							wordWrap: "break-word",
						}}
					>
						<tbody>
						<tr>
							<td style={{color: "teal"}}>
								<strong>Country</strong> <br/>
								{record.show &&
								record.show.network &&
								record.show.network.country.code}
							</td>
							<td style={{color: "teal"}}>
								<strong>Premiere</strong> <br/>
								{record.show && record.show.premiered}
							</td>
							<td style={{color: "teal"}}>
								<strong>Time</strong> <br/>
								{record.show &&
								record.show.schedule &&
								record.show.schedule.time
								}
							</td>
							<td style={{color: "teal"}}>
								<strong>Genre</strong> <br/>
								{record.show && record.show.genres[0]}
							</td>
						</tr>
						<tr>
							<td style={{color: "teal"}}>
								<strong>Network</strong> <br/>
								{record.show &&
								record.show.network &&
								record.show.network.name}
							</td>
							<td style={{color: "teal"}}>
								<strong>Ratings</strong> <br/>
								{record.show &&
								record.show.rating &&
								record.show.rating.average}
							</td>
							<td style={{color: "teal"}}>
								<strong>Season</strong> <br/>
								{record && record.season}
							</td>
							<td style={{color: "teal"}}>
								<strong>Episode</strong> <br/>
								{record && record.number}
							</td>
						</tr>
						</tbody>
					</table>
					<AddToFavoritesButton
						addedToFavorites={this.props.addedToFavorites}
						onClick={handleFavorites}
						showId={showId}
					/>
				</div>
			</div>
		);
	}
}

export default MovieDetails;