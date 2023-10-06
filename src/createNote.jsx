import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const CreateNote = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [msg, setMsg] = useState()
    const handleSubmit = async() => {
        try{
            const data = await axios.post('/api/v1/notes', {title: title, body: note})
            setMsg('Note created')
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="add-note">
            <div className="top">
                <div>
                    <button><Link to='/'>b</Link></button>
                    <span>Notes</span>
                </div>
                {note === '' && title==='' ? '' : <button onClick={handleSubmit}>s</button>}
            </div>
            <p>11:59</p>
            <input type="text" 
            value={title} onChange={(e)=>{setTitle(e.target.value)}}
            placeholder='Title'
            />
            <textarea value={note} 
            onChange={(e)=>{setNote(e.target.value)}}
            placeholder='Note something down'
            ></textarea>
        </div>
    )
}

export default CreateNote