
const NavToggle = () =>{
    const searchBar = document.getElementsByClassName("nav-input")[0];
    const searchWrap = document.getElementsByClassName("toggle-focus-search")[0];
    const dropDown = document.getElementsByClassName("dropdown-focus-wrap")[0];
    
    searchBar.addEventListener("click", function(){
        searchWrap.style.opacity = '1';
    });
    return null;
}
export default NavToggle;