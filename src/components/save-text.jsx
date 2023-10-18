import React, { Suspense } from "react";
import SaveTextData from "./saveTextData";
import { useParams } from "react-router-dom";
import '../App.css'
import emptyStyle from "../utils/msgStyle";


const SaveText = () => {
    const {NoteID} = useParams()
    return(
        <Suspense fallback={<span style={emptyStyle}>Loading data...</span>}>
            <SaveTextData id={NoteID}/>
        </Suspense>
    )
}

export default SaveText