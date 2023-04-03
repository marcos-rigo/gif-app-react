import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const SideBar = () => {
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
        <SearchBar/>
        </SideBarContainer>
        
     );
}
 
export default SideBar;