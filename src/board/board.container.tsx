import { useState } from "react";
import BoardUI from "./board.presenter";

export default function Board(){

    const [keyword, setKeyword] = useState<string>("");
    
    return(
        <BoardUI></BoardUI>
    )
}