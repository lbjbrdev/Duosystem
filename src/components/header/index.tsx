import { useNavigate } from 'react-router-dom';
import * as Styles from './styles';

interface IProps {
    isAuthenticated: boolean;
}

export function Header({ isAuthenticated }: IProps) {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/');
    };

    const renderSignOutOption = () => {
        if (isAuthenticated) {
            return (
                <Styles.SignOutContainer onClick={handleSignOut}>
                    <Styles.SignOutIcon size={40} />
                    <Styles.SignOutLabel>Sair</Styles.SignOutLabel>
                </Styles.SignOutContainer>
            );
        }
    };

    return (
        <Styles.Container>
            <Styles.Label>Duosystem</Styles.Label>

            {renderSignOutOption()}
        </Styles.Container>
    );
}