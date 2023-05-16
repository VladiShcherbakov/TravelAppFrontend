import { Button, Text, Icon } from "./styles";

const NavButton = ({ image, text, link }) => {
    return (
        <Button href={link}>
            <Icon src={image} alt={text}/>
            <Text>
                {text}
            </Text>
        </Button>
    );
};

export default NavButton;