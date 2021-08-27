import React from "react";
import MoviesList from "./MoviesList";

class MovieContainerApp extends React.Component {

    state = {
        loading: false,
        data: []
    };

    getData = () => {
        this.setState({loading: true});
        fetch('http://api.tvmaze.com/schedule?country=US')
            .then(response => response.json())
            .then(results => {
                this.setState({data: results})
            })
            .finally(e => {
                this.setState({loading: false});
            });
    };

    componentDidMount() {
        this.getData()
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <div
                    className="ui segment"
                    style={{
                        textAlign: 'center',
                        color: 'teal',
                        fontSize: '30px'
                    }}
                >
                    Tv Shows
                </div>
                <div className="ui segment">
                    <div className="ui three column grid">
                        <MoviesList movies={this.state.data}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieContainerApp;