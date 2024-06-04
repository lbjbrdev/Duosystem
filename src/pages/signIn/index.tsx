import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Input } from '../../components/form/input';
import { Header } from '../../components/header';

import { UserOrchestrator } from '../../services/user/orchestrator';

import * as Styles from './styles';

export function SignIn() {
    const [inputEmailValue, setInputEmailValue] = React.useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = React.useState<string>('');
    const [formIsValid, setFormIsValid] = React.useState<boolean>(true);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const navigate = useNavigate();

    const handleSignIn = async () => {
        setIsLoading(true);

        const userOrchestrator = new UserOrchestrator();

        const INPUT_EMAIL_VALUE_IS_INVALID = !inputEmailValue || inputEmailValue === '';
        const INPUT_PASSWORD_VALUE_IS_INVALID = !inputPasswordValue || inputPasswordValue === '';

        if (INPUT_EMAIL_VALUE_IS_INVALID || INPUT_PASSWORD_VALUE_IS_INVALID) {
            setFormIsValid(false);
            toast.error('Credenciais invalidas!', {
                position: 'top-center',
                theme: 'colored'
            });
            return;
        }

        setFormIsValid(true);

        const users = await userOrchestrator.getAll();

        const userExists = users.some(user => user.email === inputEmailValue && user.password === inputPasswordValue);

        if (!userExists) {
            setFormIsValid(false);
            toast.error('Usuario nao encontrado!', {
                position: 'top-center',
                theme: 'colored'
            });

            setIsLoading(false);
            
            return;
        }

        setIsLoading(false);

        navigate('/home');
    };

    return (
        <React.Fragment>
            <ToastContainer />

            <Header isAuthenticated={false} />

            <Styles.Form>
                <Styles.Title>Entre com seu acesso</Styles.Title>

                <Input
                    type='email'
                    placeholder='E-mail'
                    value={inputEmailValue}
                    onChange={event => setInputEmailValue(event.target.value)}
                    hasError={!formIsValid}
                />
                <Input
                    type='password'
                    placeholder='Senha'
                    value={inputPasswordValue}
                    onChange={event => setInputPasswordValue(event.target.value)}
                    hasError={!formIsValid}
                />

                <Styles.Button 
                    disabled={isLoading} 
                    isLoading={isLoading}
                    onClick={handleSignIn}
                >
                    Entrar
                </Styles.Button>
                <Styles.Button onClick={() => navigate('/register')}>Criar conta</Styles.Button>
            </Styles.Form>
        </React.Fragment>
    );
}