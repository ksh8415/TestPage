import { useState, useEffect } from "react";
import BoardUI from "./board.presenter";

export default function Board(){

    const [search, setSearch] = useState('');
    const [keyItems, setKeyItems] = useState([]);
    const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
      };

    const fetchData = ()  =>{
    return fetch(
        `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`
    )
        .then((res) => res.json())
        .then((data) => data.slice(0,100))
    }

    const updateData = async() => {
        const res = await fetchData();
        let b = res.filter((list) => list.city.includes(search) === true)
                    .slice(0,10);
        // console.log(b);
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