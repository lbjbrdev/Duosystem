import styled from 'styled-components';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

export const BackOptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin: 1rem;

    cursor: pointer;

    transition: all .2s;

    &:hover {
        opacity: .6;
    }
`;

export const BackIcon = styled(IoChevronBackCircleOutline)`
    color: #FFF;
`;

export const BackLabel = styled.p`
    color: #FFF;

    font-size: 1.3rem;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

`;

export const Title = styled.p`
    color: #FFF;

    font-size: 1.6rem;
    font-weight: bold;
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