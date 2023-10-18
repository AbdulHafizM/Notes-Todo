
import { useParams } from "react-router-dom"
import { Suspense } from 'react';
import NoteData from './NoteData';
import emptyStyle from "./utils/msgStyle";


const DisplayNote = () => {
    const {NoteId} = useParams()
    return(
        <Suspense fallback={<p style={emptyStyle}>Loading data....</p>}> 
            <NoteData id={NoteId}/>
        </Suspense>
    )
}

export default DisplayNote