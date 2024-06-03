import { LiaSignOutAltSolid } from 'react-icons/lia';
import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #282A36;

    height: 6rem;

    padding: 1.5rem;
`;

export const Label = styled.p`
    color: #FFF;

    font-size: 2rem;
`;

export const SignOutIcon = styled(LiaSignOutAltSolid)`
    color: #FFF;
`;

export const SignOutContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    cursor: pointer;

    transition: all .2s;

    &:hover {
        opacity: .6;
    }
`;

export const SignOutLabel = styled.p`
    color: #FFF;

    font-size: 1.3rem;
`;