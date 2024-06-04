import styled from 'styled-components';

interface IProps {
    isLoading?: boolean;
}

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

export const Button = styled.button<IProps>`
    width: 10rem;
    height: 2.5rem;

    background-color: #282A36;

    color: #FFF;

    border: 1px solid #FFF;
    border-radius: 0.3rem;

    cursor: ${props => props?.isLoading ? 'not-allowed' : 'pointer'};

    transition: all .2s;

    &:hover {
        opacity: .6;
    }
`;