import React from 'react';

import { Input } from '../../components/form/input';

import * as Styles from './styles';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';

export function SignIn() {
    const [inputEmailValue, setInputEmailValue] = React.useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = React.useState<string>('');
    const [formIsValid, setFormIsValid] = React.useState<boolean>(true);

    const navigate = useNavigate();

    const handleSubmit = () => {
        const INPUT_EMAIL_VALUE_IS_INVALID = !inputEmailValue || inputEmailValue === '';
        const INPUT_PASSWORD_VALUE_IS_INVALID = !inputPasswordValue || inputPasswordValue === '';

        if (INPUT_EMAIL_VALUE_IS_INVALID || INPUT_PASSWORD_VALUE_IS_INVALID) {
            setFormIsValid(false);
            window.alert('Credenciais invalidas!');
            return;
        } else {
            setFormIsValid(true);
            window.alert('Sucesso!');
            navigate('/home');
        }

    };

    return (
        <React.Fragment>
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

                <Styles.Button onClick={handleSubmit}>Entrar</Styles.Button>
                <Styles.Button>Criar conta</Styles.Button>
            </Styles.Form>
        </React.Fragment>
    );
}