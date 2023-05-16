import ModalButton from "../ModalButton";
import { ButtonsContainer, WindowContainer } from "./styles";

const ModalWindow = ({ showModal, customOnClick }) => {
    if (showModal) {
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
    }

    return (
        <WindowContainer onClick={customOnClick} showModal={showModal}>
            <ButtonsContainer onClick={(e) => e.stopPropagation()}>
                <ModalButton text="Ввести самостоятельно" link = "" />
                <ModalButton text="Добавить место на карте" link = "" />
                <ModalButton text="Добавить трансфер" link = "" />
                <ModalButton text="Найти место через поиск" link = "/search" />
            </ButtonsContainer>
        </WindowContainer>
    )
}

export default ModalWindow;