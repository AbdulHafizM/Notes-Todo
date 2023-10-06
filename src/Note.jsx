import { Suspense, useEffect } from "react"
import NoteCard from "./Note-card"
import SearchBar from "./searchBar"
import { Link } from "react-router-dom"
import NoteList from "./noteList"


const Note = () => {
    
    return (
        <div className="note">
            <h1>Notes</h1>
            <SearchBar />
            <Suspense fallback={<h1>loading...</h1>}>
                <NoteList />
            </Suspense>
            
            <button className="btn-add"><Link to='/create-note'>+</Link></button>
        </div>
    )
}

export default Note