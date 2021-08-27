import React from "react";
import AddToFavoritesButton from "./AddToFavoritesButton";

class MovieDetails extends React.Component {

    render() {
        const record = this.props.record;
        console.log(record);

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
                <img
                    className="ui medium rounded image"
                    src={record.show.image && record.show.image.original}
                    style={{width: "310px"}}
                />
                <div className="ui segment">
                    <h4
                        className="ui header"
                        style={{color: 'teal', padding: '5px'}}
                    >
                        <center>{record.show && record.show.name}</center>
                        <br/>
                    </h4>
                    <table className="ui celled table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Premiered</strong> <br/>
                                {record.show && record.show.premiered}
                            </td>
                            <td>
                                <strong>Genre</strong> <br/>
                                {record.show && record.show.genres[0]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Ratings</strong> <br/>
                                {record.show && record.show.rating && record.show.rating.average}
                            </td>
                            <td>
                                <strong>Episode</strong> <br/>
                                Episode: {record && record.number}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <AddToFavoritesButton/>
                </div>
            </div>
        )
    };
}

export default MovieDetails;