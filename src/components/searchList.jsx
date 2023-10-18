import axios from 'axios';
import useSWR from 'swr';
import NoteCard from '../Note-card';
import emptyStyle from '../utils/msgStyle';

const fetcher = url => axios.get(url).then(({data}) => data);

const SearchList = ({searchTerm}) => {
    const { data: searchList } = useSWR(`/api/v1/notes/search?query=${searchTerm}`, fetcher, { suspense: true});
    return(
        <>{
            searchList.findNotes?.length >= 1 ?
            searchList?.findNotes?.map(item => (
                <NoteCard key={item.id} item={item} />
            )) :
            <span style={emptyStyle}>No notes found</span>
        }
        </>
    )
}

export default SearchList