import styled from 'styled-components';

interface IProps {
    hasError?: boolean;
}

export const Container = styled.div``;

export const Field = styled.input<IProps>`
    height: 2rem;
    width: 25rem;

    padding: 1rem;

    border: 1px solid ${props => props?.hasError ? '#FF0000' : '#FFF'};
    border-radius: 0.5rem;

    outline: none;

    background-color: #282A36;

    color: #FFF;
`;