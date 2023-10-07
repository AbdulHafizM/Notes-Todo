import { useState } from 'react'
import searchIcon from './search.svg'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return(
        <div className='search'>
                <input
                    placeholder=''
                    value={searchTerm}
                    onChange={(e)=>{
                        setSearchTerm(e.target.value)
                    }}
                />
                <img 
                    src={searchIcon}
                    alt='Search'
                    onClick={()=>{}}
                />
            </div>
    )
}

export default SearchBar