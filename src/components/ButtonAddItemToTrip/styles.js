import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
    gap: 20px;

    background: #FFFFFF;
    border-radius: 20px 20px 0px 0px;

    width: 100%;

    p {
        font-family: var(--font);
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        display: flex;
        align-items: center;
        text-align: center;
    }
`;

const ButtonClose = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 0px;
`;

const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    gap: 20px;

    p {
        font-family: var(--font);
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;

        display: flex;
        align-items: center;
    }
`;

export { ButtonContainer, ButtonClose, TripsContainer, }