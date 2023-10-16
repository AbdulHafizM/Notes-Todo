import './App.css';
import { useState, useContext} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import {notifySuccess, notifyErr, notifyPromise} from './utils/notify';



const CreateNote = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const handleSubmit = async() => {
            const sendData = async() => {
                await axios.post('/api/v1/notes', {title: title, body: note}).then((res)=>{
                    navigate('/')
                }).catch(err => notifyErr(err.msg))
            }
            notifyPromise(sendData, 'saving', 'save')
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