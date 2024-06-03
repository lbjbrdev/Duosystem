import React from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/header";
import { Input } from "../../components/form/input";

import * as Styles from './styles';

export function Register() {
    const [inputFullNameValue, setInputFullNameValue] = React.useState<string>('');
    const [inputEmailValue, setInputEmailValue] = React.useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = React.useState<string>('');
    const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = React.useState<string>('');
    const [formIsValid, setFormIsValid] = React.useState<boolean>(true);

    const navigate = useNavigate();

    const handleRegister = () => {
        const INPUT_NAME_VALUE_IS_INVALID = !inputFullNameValue || inputFullNameValue === '';
        const INPUT_EMAIL_VALUE_IS_INVALID = !inputEmailValue || inputEmailValue === '';
        const INPUT_PASSWORD_VALUE_IS_INVALID = !inputPasswordValue || inputPasswordValue === '';
        const INPUT_CONFIRM_PASSWORD_VALUE_IS_INVALID = !inputConfirmPasswordValue || inputConfirmPasswordValue !== inputPasswordValue;

        if (INPUT_NAME_VALUE_IS_INVALID || INPUT_EMAIL_VALUE_IS_INVALID || INPUT_PASSWORD_VALUE_IS_INVALID) {
            setFormIsValid(false);
            window.alert('Preencha corretamente os campos do formulario!');
            return;
        }

        if (INPUT_CONFIRM_PASSWORD_VALUE_IS_INVALID) {
            setFormIsValid(false);
            window.alert('As senhas nao conferem!');
            return;
        }

        setFormIsValid(true);
        window.alert('Cadastro realizado com sucesso!');
        navigate('/');

    };

    return (
        <React.Fragment>
            <Header isAuthenticated={false} />

            <Styles.BackOptionContainer onClick={() => navigate('/')}>
                <Styles.BackIcon size={40} />
                <Styles.BackLabel>Voltar</Styles.BackLabel>
            </Styles.BackOptionContainer>

            <Styles.Form>
                <Styles.Title>Realize aqui o seu cadastro</Styles.Title>

                <Input 
                    type='text' 
                    placeholder='Nome completo' 
                    value={inputFullNameValue}
                    onChange={event => setInputFullNameValue(event.target.value)}
                    hasError={!formIsValid}
                />
                
                <Input 
                    type='email' 
                    placeholder='Seu melhor e-mail' 
                    value={inputEmailValue}
                    onChange={event => setInputEmailValue(event.target.value)}
                    hasError={!formIsValid}
                />
                
                <Input 
                    type='password' 
                    placeholder='Escolha uma senha' 
                    value={inputPasswordValue}
                    onChange={event => setInputPasswordValue(event.target.value)}
                    hasError={!formIsValid}
                />
                
                <Input 
                    type='password' 
                    placeholder='Confirme a senha escolhida' 
                    value={inputConfirmPasswordValue}
                    onChange={event => setInputConfirmPasswordValue(event.target.value)}
                    hasError={!formIsValid}
                />

                <Styles.Button onClick={handleRegister}>Finalizar cadastro</Styles.Button>
                <Styles.Button onClick={() => navigate('/')}>Cancelar</Styles.Button>
            </Styles.Form>
        </React.Fragment>
    );
}