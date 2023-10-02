import searchIcon from './search.svg'

const SearchBar = () => {
    return(
        <div className='search'>
                <input
                    placeholder=''
                    value=''
                    onChange={()=>{}}
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