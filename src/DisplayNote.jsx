
import { useParams } from "react-router-dom"
import { Suspense } from 'react';
import NoteData from './NoteData';


const DisplayNote = () => {
    const {id} = useParams()
    return(
        <Suspense fallback={<h1>Loading....</h1>}> 
            <NoteData id={id}/>
        </Suspense>
    )
}

export default DisplayNote