import React, { Suspense } from "react";
import SaveTextData from "./saveTextData";
import { useParams } from "react-router-dom";
import '../App.css'
import emptyStyle from "../utils/msgStyle";
import ErrorBoundary from "../utils/errorBoundary";


const SaveText = () => {
    const {NoteID} = useParams()
    return(
        <ErrorBoundary fallback={<span style={emptyStyle}>An error occured</span>}>
        <Suspense fallback={<span style={emptyStyle}>Loading data...</span>}>
            <SaveTextData id={NoteID}/>
        </Suspense>
        </ErrorBoundary>
    )
}

export default SaveText