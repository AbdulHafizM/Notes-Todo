import React, {useContext} from 'react';
import './App.css'
import axios from 'axios';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { modalContext } from './App';
import Modal from './components/Modal';


const fetcher = url => axios.get(url).then(({data}) => data);

const NoteData = ({id}) => {
    const {setIsOpen} = useContext(modalContext)
    const { data: noteData } = useSWR(`/api/v1/notes/${id}`, fetcher, { suspense: true});
    return(
        <>
        <div className="add-note">
            <Modal title={noteData.note.title} id={id}/>
            <div className="top">
                <div>
                    <button><Link to='/'>b</Link></button>
                    <span>Notes</span>
                </div>
                <div>
                    <button><Link to={`/note/share/${id}`}>sh</Link></button>
                    <button onClick={() => setIsOpen(true)}>D</button>
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
        </>
    )
}

export default NoteData