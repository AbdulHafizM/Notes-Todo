import { useNavigate } from 'react-router-dom';
import '../App.css';
import { dateFormatter, timeFormatter } from '../utils/dateFormatter';

const NoteCard = ({item}) => {
    const navigate = useNavigate()
    return(
        <button className="note-card" onClick={() => navigate(`/note/${item._id}`)}>
            <div className="title">{
                item.title == '' ? item.body.length > 15 ? item.body.slice(0,15) + '...' : item.body : item.title.length > 15 ? item.title.slice(0,15) : item.title
            }</div>
            <div><span>{timeFormatter(item.createdAt)},</span><span>{dateFormatter(item.createdAt)}</span></div>
        </button>
    )
}

export default NoteCard