import { Suspense, useEffect, useState} from "react"
import { Link } from "react-router-dom"
import NoteList from "./components/noteList"
import searchIcon from './search.svg'
import SearchList from "./components/searchList"
import NotesIcon from '@mui/icons-material/Notes';
import emptyStyle from "./utils/msgStyle"
import ErrorBoundary from "./utils/errorBoundary"


const Note = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const queryNotes = () => {

    }
    return (
        <div className="note">
            <h1><NotesIcon sx={{color:'#fff'}}/><span> </span><span>Notes</span></h1>
            <div className='search'>
                <input
                    placeholder='type key words'
                    value={searchTerm}
                    onChange={(e)=>{
                        setSearchTerm(e.target.value)
                    }}
                />
                <img 
                    src={searchIcon}
                    alt='Search'
                    onClick={queryNotes}
                />
            </div>
            <div className="res-container">
            {
                searchTerm !== ''?
                <ErrorBoundary fallback={<span style={emptyStyle}>An error occured</span>}>
                <Suspense fallback={<span style={emptyStyle}>Searching...</span>}>
                    <SearchList searchTerm={searchTerm}/>
                </Suspense>
                </ErrorBoundary> : 
                <ErrorBoundary>
                <Suspense fallback={<span style={emptyStyle}>An error occured</span>}>
                    <NoteList />
                </Suspense>
                </ErrorBoundary>
    
            }
            </div>
            
            <button className="btn-add"><Link to='/create-note'>+</Link></button>
        </div>
    )
}

export default Note