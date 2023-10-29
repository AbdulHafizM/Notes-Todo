
import { useParams } from "react-router-dom"
import { Suspense } from 'react';
import NoteData from './NoteData';
import emptyStyle from "../utils/msgStyle";
import ErrorBoundary from "../utils/errorBoundary";


const DisplayNote = () => {
    const {NoteId} = useParams()
    return(
        <ErrorBoundary fallback={<span style={emptyStyle}>An error occured</span>}>
        <Suspense fallback={<p style={emptyStyle}>Loading data....</p>}> 
            <NoteData id={NoteId}/>
        </Suspense>
        </ErrorBoundary>
    )
}

export default DisplayNote