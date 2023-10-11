import axios from 'axios';
import useSWR from 'swr';
import NoteCard from '../Note-card';

const fetcher = url => axios.get(url).then(({data}) => data);

const SearchList = ({searchTerm}) => {
    const { data: searchList } = useSWR(`/api/v1/notes/search?query=${searchTerm}`, fetcher, { suspense: true});
    return(
        <>{
            searchList.findNotes?.length >= 1 ?
            searchList?.findNotes?.map(item => (
                <NoteCard key={item.id} item={item} />
            )) :
            <h1>No notes found</h1>
        }
        </>
    )
}

export default SearchList