import { useEffect, useState } from "react";

export function Character({url}) {
    console.log(url);

    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetchCharacter();
    }, []);

    const fetchCharacter = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPerson(data);
    }

    return (
        <div>
            {person && person.name}
        </div>
    )
}