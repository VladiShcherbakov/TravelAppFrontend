import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 10px;

    width: 340px;
    height: 160px;

    background: #D9D9D9;
    border-radius: 10px;

    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(255, 255, 255, 0.5) 58.85%), url(${props => props.url ? props.url : ""});

    background-size: cover;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;

    width: 320px;
    height: 66px;
`;

const Text = styled.p`
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    display: flex;
    align-items: center;
    margin: 0;
`;

export{
    Card,
    Info,
    Text
}