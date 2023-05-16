import { HeaderDiv, HeaderText } from "./styles";

const Header = ( { text } ) => {
    return(
        <HeaderDiv>
            <HeaderText>{text}</HeaderText>
        </HeaderDiv>
    );
}

export default Header;