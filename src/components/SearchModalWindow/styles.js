import styled from "styled-components";

const WindowContainer = styled.div`
    display: ${(props) => (props.showModal ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;

    height: calc(100% - 80px);
    width: 100%;

    position: fixed;
    background: rgba(49, 43, 43, 0.62);

    box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
    gap: 20px;
    isolation: isolate;

    width: 100%;
    height: 200px;

    background: #FFFFFF;
    border-radius: 20px 20px 0px 0px;

    box-sizing: border-box;

    overflow-y: scroll;
`;

const InnerButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    gap: 20px;
`;

const ButtonText = styled.a`
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    display: flex;
    align-items: center;
`;

export { WindowContainer, ButtonsContainer, InnerButtonsContainer, ButtonText }