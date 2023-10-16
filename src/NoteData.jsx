import React, {useContext, useState} from 'react';
import './App.css'
import axios from 'axios';
import useSWR from 'swr';
import { Link,useNavigate } from 'react-router-dom';
import { modalContext } from './App';
import Modal from './components/Modal';
import { notifySuccess, notifyErr, notifyPromise } from './utils/notify';
import {dateFormatter, timeFormatter} from './utils/dateFormatter';

const dateStyle = {
    fontSize: '14px',
    color: '#fff',
    padding: '0.3em'
}

const fetcher = url => axios.get(url).then(({data}) => data);

const NoteData = ({id}) => {
    const navigate = useNavigate()
    const [isFormActive, setIsFormActive] = useState(false)
    const {setIsOpen} = useContext(modalContext)
    const { data: noteData } = useSWR(`/api/v1/notes/${id}`, fetcher, { suspense: true});
    const [title, setTitle] = useState(noteData?.note.title)
    const [body, setBody] = useState(noteData?.note.body)
    console.log(title)
    const handleSubmit = async() => {
        const sendData = async() => {
            await axios.patch(`/api/v1/notes/${id}`, {title: title, body: body})
        }
        notifyPromise(sendData, 'saving', 'save')
        setIsFormActive(false)
    }
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
                {isFormActive ? <button onClick={handleSubmit}>save</button> : <>
                    <button><Link to={`/note/share/${id}`}>sh</Link></button>
                    <button onClick={() => setIsOpen(true)}>D</button>
                    </>
                }
                </div>
            </div>
            <span style={dateStyle}>{dateFormatter(noteData?.note.createdAt)}</span>
            <span style={dateStyle}>{timeFormatter(noteData?.note.createdAt)}</span>
            <input type="text" 
            value={title} onChange={(e)=>{
                setTitle(e.target.value)
                setIsFormActive(true)
            }}
            onFocus={()=> setIsFormActive(true)}
            placeholder='Title'
            />
            <textarea value={body} 
            onChange={(e)=>{
                setBody(e.target.value)
                setIsFormActive(true)
            }}
            onFocus={()=> setIsFormActive(true)}
            placeholder='Note something down'
            ></textarea>
        </div>
        </>
    )
}

export default NoteData