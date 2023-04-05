import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const SideBar = ({search, setSearch}) => {
    const SideBarContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `
    return ( 
        <SideBarContainer>
        <SearchBar search={search} setSearch={setSearch}/>
        </SideBarContainer>
        
     );
}
 
export default SideBar;