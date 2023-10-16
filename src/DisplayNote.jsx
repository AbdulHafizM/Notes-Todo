
import { useParams } from "react-router-dom"
import { Suspense } from 'react';
import NoteData from './NoteData';


const DisplayNote = () => {
    const {NoteId} = useParams()
    return(
        <Suspense fallback={<h1>Loading....</h1>}> 
            <NoteData id={NoteId}/>
        </Suspense>
    )
}

export default DisplayNote