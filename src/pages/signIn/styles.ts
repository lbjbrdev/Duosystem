import styled from 'styled-components';

export const Title = styled.p`
    font-size: 1.6rem;

    color: #FFF;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-top: 15rem;
`;

export const Button = styled.button`
    width: 10rem;
    height: 2.5rem;

    background-color: #282A36;

    color: #FFF;

    border: 1px solid #FFF;
    border-radius: 0.3rem;

    cursor: pointer;

    transition: all .2s;

    &:hover {
        opacity: .6;
    }
`;