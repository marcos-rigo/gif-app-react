

const SearchBar = ({search, setSearch}) => {

    return ( 
        <form>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </form>
     );
}
 
export default SearchBar;