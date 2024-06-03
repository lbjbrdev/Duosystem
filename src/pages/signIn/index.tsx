import React from 'react';

import { Input } from '../../components/form/input';
import { Header } from '../../components/header';

import * as Styles from './styles';

export function SignIn() {
    const [inputEmailValue, setInputEmailValue] = React.useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = React.useState<string>('');
    const [formIsValid, setFormIsValid] = React.useState<boolean>(true);

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
        }

    };

    return (
        <React.Fragment>
            <Header />

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