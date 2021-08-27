import React from "react";

class AddToFavoritesButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favRecords: []
        };
    }

    onAddedToFavoritesButton = (event) => {
        console.log(event.target.value);
    };

    render() {
        return (
            <button
                onClick={this.onAddedToFavoritesButton}
                className="ui teal basic button"
            >
                Add to Favorites
            </button>
        );
    };
}

export default AddToFavoritesButton;