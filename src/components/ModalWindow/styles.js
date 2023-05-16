import styled from "styled-components";

const WindowContainer = styled.div`
    display: ${(props) => (props.showModal !== false ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px 20px;
    gap: 10px;

    height: calc(100% - 80px - 98px);
    width: 100%;

    position: fixed;
    background: rgba(49, 43, 43, 0.62);

    box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px;
    gap: 10px;

    background: rgba(255, 255, 255, 0.27);
    border-radius: 16px;
`;

export { WindowContainer, ButtonsContainer, }