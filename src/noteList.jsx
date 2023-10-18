import axios from 'axios';
import useSWR from 'swr';
import NoteCard from './Note-card';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
const emptyStyle = {
    height: '340px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff'
}
const fetcher = url => axios.get(url).then(({data}) => data);

const NoteList = () => {
    const { data: noteList } = useSWR('/api/v1/notes', fetcher, { suspense: true});
    if(noteList.notes.length == 0) return (<div style={emptyStyle}><NoteAddIcon sx={{color:'#fff', fontSize: 35}}/> <span>No notes</span></div>)
    return(
        <>{
            noteList?.notes.map(item => (
                <NoteCard key={item.id} item={item} />
            ))
        }
        </>
    )
}

export default NoteList