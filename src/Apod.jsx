import React from "react";

class Apod extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apod: null, date: "2020-01-01" };
    }

    onError = (error) => {
        alert("Erreur: " + error);
    };

    componentDidMount = () => {
        this.refresh();
    };

    refresh = () => {
        const key = "alxhJbkmFVHXK10qRwos2PvcIdCy9r69H62FoQEy";
        const date = this.state.date;
        const url = "https://api.nasa.gov/planetary/apod?api_key="+key+"&date="+date;

        fetch(url).then(

            (response) => {
                response.json().then(

                    (apodData) => {
                        this.setState({ apod: apodData });
                    },

                    this.onError

                )
            },

            this.onError

        )
    };

    changeHandler = (event) => {
        const element = event.target;
        this.setState(
            { date: element.value }, 
            this.refresh
        );
    };

    submitHanler = (event) => {
        event.preventDefault();
    };

    render = () => {
        return (
            <>

                <form onSubmit={this.submitHanler}>
                    <label>Date :</label>
                    <input type="date" value={this.state.date} onChange={this.changeHandler} name="date" />
                    <input type="submit" value="Envoyer" />
                </form>

                {
                    this.state.apod !== null

                    &&

                    (
                        <>
                            <h2>{this.state.apod.title}</h2>

                            {
                                this.state.apod.media_type === "image" &&
                                <img src={this.state.apod.url} alt={this.state.apod.title} />
                            }

                            {
                                this.state.apod.media_type === "video" &&
                                <a href={this.state.apod.url} target="_blank">Consulter la vidéo</a>
                            }

                            <p>{this.state.apod.date} - {this.state.apod.copyright}</p>
                            <p>{this.state.apod.explanation}</p>
                        </>
                    )
                }

            </>
        );
    };
}

export default Apod;