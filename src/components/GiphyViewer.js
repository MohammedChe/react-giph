import axios from "axios";
import { useState, useEffect } from 'react';

const GIPHY_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'ld7uR2ZapD9Ae4pzCZFJrBRyF1FMAeRW';

const GiphyViewer = () => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        // console.log("loaded");

        axios.get(`${GIPHY_URL}/trending?api_key=${API_KEY}`)
             .then((response) => {
                console.log(response.data.data);
                setGifs(response.data.data);
             })
             .catch((error) => {
                console.log(error);
             });


    }, []);

    const gifComponents = gifs.map((g) => {
        return (
            <div>
                <p>{g.title}</p>
                <p>{g.url}</p>
            </div>
        );
    });
    

    return (
        <div>
            {gifComponents}
        </div>
    );
}





export default GiphyViewer;