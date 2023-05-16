import { ButtonContainer, ButtonText } from "./styles";

const ModalButton = ({ text, link }) => {
    return (
    <ButtonContainer alt={text} href={link}>
        <ButtonText>
            {text}
        </ButtonText>
    </ButtonContainer>
    )
}

export default ModalButton;