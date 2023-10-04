import NoteCard from "./Note-card"
import SearchBar from "./searchBar"

const Note = () => {
    return (
        <div className="note">
            <h1>Notes</h1>
            <SearchBar />
            <NoteCard />
            <NoteCard />
            <button className="btn-add">+</button>
        </div>
    )
}

export default Note