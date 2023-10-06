import { useNavigate } from 'react-router-dom';
import './App.css';

const NoteCard = ({item}) => {

    const navigate = useNavigate()
    return(
        <button className="note-card" onClick={() => navigate(`/note/${item._id}`)}>
            <div className="title">{
                item.title == '' ? item.body.slice(0,12) + '...' : item.title
            }</div>
            <div><span>{item.createdAt}</span></div>
        </button>
    )
}

export default NoteCard