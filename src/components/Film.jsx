export function Film({movie}) {
    return(
        <>
            <p>{movie.title}</p>
            <ul>
                <li><strong>Director: </strong>{movie.director}</li>
                <li><strong>Episode: </strong>{movie.episode_id}</li>
                <li><strong>Producers: </strong>{movie.producer}</li>
                <li><strong>Release date: </strong>{movie.release_date}</li>
            </ul>
        </>
    );
}