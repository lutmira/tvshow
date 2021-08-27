import React from "react";
import MovieDetails from "./MovieDetails";

class MoviesList extends React.Component {

    render() {
        const shows = this.props.shows;

        return shows.map((record) => {
            return (
                <MovieDetails
                    key={record.show.id}
                    record={record}
                    shows={shows}
                />
            )
        })
    }
}

export default MoviesList;