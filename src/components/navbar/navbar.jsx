import SNavbar from "./styles";
import NavButton from "../buttonNavbar";
import HomeIcon from "../../icons/homepage.png";
import SearchIcon from "../../icons/search.png";
import PlanningIcon from "../../icons/planning.png";


const Navbar = () => 
{

    return (
        <SNavbar>
            <NavButton image={HomeIcon} text={"Домой"} link="/"></NavButton>
            <NavButton image={SearchIcon} text={"Поиск"} link="/search"></NavButton>
            <NavButton image={PlanningIcon} text={"Планирование"} link="/planning"></NavButton>
        </SNavbar>
    );
}

export default Navbar;