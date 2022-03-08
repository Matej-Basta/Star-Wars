import {Character} from "./Character.jsx";
import React, {useState} from "react";

export function Film({movie}) {

    const [showCharacters, setShowCharacters] = useState(false);

    return(
        <>
            <p>{movie.title}</p>
            <ul>
                <li><strong>Director: </strong>{movie.director}</li>
                <li><strong>Episode: </strong>{movie.episode_id}</li>
                <li><strong>Producers: </strong>{movie.producer}</li>
                <li><strong>Release date: </strong>{movie.release_date}</li>
                {showCharacters && movie.characters.map((ch, i) => (
                    <Character url={ch} key={i} />
                ))}
                <button onClick={() => setShowCharacters(!showCharacters)}>Show Characters</button>
            </ul>
        </>
    );
}