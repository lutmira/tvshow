import React from "react";

class AddToFavoritesButton extends React.Component {
	render() {
		const { addedToFavorites } = this.props;
		return (
			<button
				onClick={this.props.onClick(this.props.showId)}
				className='ui teal basic button'>
				Add to Favorites
			</button>
		);
	}
}

export default AddToFavoritesButton;