import React from "react";
import MovieContainerApp from "./MovieContainerApp";
import AddToFavoritesButton from "./AddToFavoritesButton";

class MovieDetails extends React.Component {

    render() {
        const record = this.props.record;
        console.log(record);

        const index = record.show.id;

        return (

            <div
                className="ui placeholder segment"
                style={{
                    marginLeft: '20px',
                    marginRight: '10px',
                    marginTop: '10px',
                    gridGap: '0 10px'
                }}
            >
                {this.getData().map((record, index) => (
                    <div>
                        <img
                            className="ui medium rounded image"
                            key={index}
                            src={record.show.image && record.show.image.original}
                            style={{width: "310px"}}
                        />
                        <div className="ui segment">
                            <h4
                                className="ui header"
                                style={{color:'teal', padding: '5px'}}
                            >
                                {record.show && record.show.name}
                                <br/>
                                Premiered: {record.show && record.show.premiered}
                                 <br/>
                                Genre: {record.show && record.show.genres[0]}
                                <br/>
                                Ratings: {record.show && record.show.rating && record.show.rating.average}
                                <br/>
                                Episode: {record && record.number}
                            </h4>
                            <AddToFavoritesButton />
                        </div>
                    </div>
                    ))}
            </div>
        )

    };
}

export default MovieDetails;