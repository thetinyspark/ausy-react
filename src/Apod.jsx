import React, { useState, useEffect } from "react";
import './Apod.css';

function Apod( props ){
    const [apod, setApod] = useState(null);
    const [date, setDate] = useState("2020-01-01");
    const [img, setImg] = useState("");
    const [hd, setHd] = useState(false);

    const onError       = (error) => alert("Erreur: " + error)  ;
    const changeHandler = (event) => setDate(event.target.value);
    const submitHanler  = (event) => event.preventDefault()     ;

    const refresh = () => {
        const key = "alxhJbkmFVHXK10qRwos2PvcIdCy9r69H62FoQEy";
        const url = "https://api.nasa.gov/planetary/apod?api_key=" + key + "&date=" + date;
        fetch(url).then(
            (response) => {
                response.json().then(
                    (apodData) => {
                        setApod(apodData);
                        setImg(apodData.url);
                    },
                    onError
                )
            },
            onError
        );
    };

    const qualityHandler = (event) => {
        const isHd = event.target.value === "true";
        let url = (apod === null) ? "" : (isHd) ? apod.hdurl : apod.url; 
        setHd(isHd); 
        setImg(url);
    };

    useEffect( refresh,  [date] );

    return (
        <>
            <form onSubmit={submitHanler}>
                <label>Date :</label>
                <input type="date" value={date} onChange={changeHandler} name="date" />
                <input type="submit" value="Envoyer" />
            </form>

            <select name="hdsd" value={hd} onChange={qualityHandler}>
                <option value={false}>SD</option>
                <option value={true}>HD</option>
            </select>
            {
                apod !== null &&
                (
                    <>
                        <h2>{apod.title}</h2>
                        {
                            apod.media_type === "image" &&
                            <img className={ hd ? "hd" : "sd"} src={img} alt={apod.title} />
                        }

                        {
                            apod.media_type === "video" &&
                            <a href={apod.url} target="_blank">Consulter la vidéo</a>
                        }

                        <p>{apod.date} - {apod.copyright}</p>
                        <p>{apod.explanation}</p>
                    </>
                )
            }
        </>
    );

}
export default Apod;