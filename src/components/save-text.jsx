import React, { Suspense } from "react";
import SaveTextData from "./saveTextData";
import { useParams } from "react-router-dom";
import '../App.css'


const SaveText = () => {
    const {NoteID} = useParams()
    return(
        <Suspense fallback={<h1>loading...</h1>}>
            <SaveTextData id={NoteID}/>
        </Suspense>
    )
}

export default SaveText