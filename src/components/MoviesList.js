import React from "react";
import MovieDetails from "./MovieDetails";

class MoviesList extends React.Component {
    render() {
        return this.props.movies.map((record) => {
                return <MovieDetails key={record.show.id} record={record}/>
            })
    }
}

export default MoviesList;