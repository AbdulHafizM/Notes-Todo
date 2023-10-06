import './App.css'
import axios from 'axios';
import useSWR from 'swr';
import { Link } from 'react-router-dom';

const fetcher = url => axios.get(url).then(({data}) => data);

const NoteData = ({id}) => {
    const { data: noteData } = useSWR(`/api/v1/notes/${id}`, fetcher, { suspense: true});
    console.log(noteData)
    return(
        <div className="add-note">
            <div className="top">
                <div>
                    <button><Link to='/'>b</Link></button>
                    <span>Notes</span>
                </div>
                <div>
                    <button>sh</button>
                    <button>D</button>
                </div>
                {}
            </div>
            <p>{noteData?.note.createdAt}</p>
            <input type="text" 
            value={noteData?.note.title} onChange={()=>{}}
            placeholder='Title'
            />
            <textarea value={noteData?.note.body} 
            onChange={(e)=>{}}
            placeholder='Note something down'
            ></textarea>
        </div>
    )
}

export default NoteData