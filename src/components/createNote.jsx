import '../App.css';
import { useState, useContext} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import {notifySuccess, notifyErr, notifyPromise} from '../utils/notify';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
const topStyle = {
    display: 'flex'
}

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
    const getTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        return `${hours}:${minutes}`
    }
    return(
        <div className="add-note">
            <div className="top">
                <div style={topStyle}>
                    <Link to='/'><ArrowBackIcon sx={{color: '#fff'}}/></Link>
                    <span>Notes</span>
                </div>
                {note === '' && title==='' ? '' : <button onClick={handleSubmit}><CheckIcon sx={{color: '#fff'}}/></button>}
            </div>
            <p>{getTime}</p>
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