import styled from "styled-components";

const PlanBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    height: 100vh; 
`;

const InnerBody = styled.div`
    height:100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items:center;
`;

const PlanImage = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 10px;

    width: 100%;
    height: 160px;

    background: #DDDDDD;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0.6) 58.85%), url(${props => props.url ? props.url : ""});

    background-size: cover;

    p {
        font-family: var(--font);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        display: flex;
        align-items: center;

        margin: 0;
    }
`;

const WeeksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 10px;

    min-width: 100%;

    overflow: hidden;

    box-sizing: border-box;
`;

const SeparatingLine = styled.div`
    border: 1px solid #000000;
    width: 100%;
`;

const ButtonToAdd = styled.a`
    display: ${(props) => (!props.showModal ? "flex" : "none")};
    width: 60px;
    height: 60px;

    position: absolute;
    right: 20px;
    bottom: 100px;
`;

export { PlanBody, InnerBody, PlanImage, WeeksContainer, SeparatingLine, ButtonToAdd, }