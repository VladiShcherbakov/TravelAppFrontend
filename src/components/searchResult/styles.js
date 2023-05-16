import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 160px;

    background: #D9D9D9;
    border-radius: 10px;

    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(255, 255, 255, 0.8) 70%), url(${props => props.url ? props.url : ""});

    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    gap: 17px;

    box-sizing: border-box;

    margin-bottom: 20px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;

    width: 100%;

`;

const Text = styled.p`
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: black;

    width: 100%;
    margin: 0;
`;

const Button = styled.a`

    width: 40px;
    height: 40px;
`;

export{
    Container,
    Info,
    Text,
    Button,
}