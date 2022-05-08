import { useState, useEffect } from "react";
import BoardUI from "./board.presenter";

export default function Board(){

    const [search, setSearch] = useState('');
    const [keyItems, setKeyItems] = useState([]);

    const fetchData = ()  =>{
        return fetch(
            `http://hn.algolia.com/api/v1/search?query='+search+'&tags=story&page=1`
        )
        .then((res) => res.json())
    }

    const updateData = async() => {
        const res = await fetchData();
        let b = res.hits.filter((list) => list.title.includes(search) === true)
        setKeyItems(b);
    }

    useEffect(() => {
        updateData();
            },[search])

    const handleInput = (event) => {
        setSearch(event.target.value);
    };
    
    return(
        <BoardUI search={search} setSearch={setSearch} keyItems={keyItems} handleInput={handleInput}></BoardUI>
    )
}