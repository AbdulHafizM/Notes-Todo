import axios from 'axios';
import useSWR from 'swr';
import NoteCard from './Note-card';

const fetcher = url => axios.get(url).then(({data}) => data);

const NoteList = () => {
    const { data: noteList } = useSWR('/api/v1/notes', fetcher, { suspense: true});
    if(noteList.notes.length == 0) return (<h1>No notes click the add button to create note</h1>)
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