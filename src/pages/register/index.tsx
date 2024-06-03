import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import { Header } from "../../components/header";
import { Input } from "../../components/form/input";

import { emailIsValidFormat, passwordIsValidFormat } from "../../utils/validations";

import * as Styles from './styles';
import 'react-toastify/dist/ReactToastify.css';

export function Register() {
    const [inputFullNameValue, setInputFullNameValue] = React.useState<string>('');
    const [inputEmailValue, setInputEmailValue] = React.useState<string>('');
    const [inputPasswordValue, setInputPasswordValue] = React.useState<string>('');
    const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = React.useState<string>('');
    const [inputDateOfBirthValue, setInputDateOfBirthValue] = React.useState<string>('');
    const [formIsValid, setFormIsValid] = React.useState<boolean>(true);

    const navigate = useNavigate();

    const handleRegister = () => {
        const INPUT_NAME_VALUE_IS_INVALID = !inputFullNameValue || inputFullNameValue === '';
        const INPUT_EMAIL_VALUE_IS_INVALID = !inputEmailValue || inputEmailValue === '' || !emailIsValidFormat(inputEmailValue);
        const INPUT_PASSWORD_VALUE_IS_INVALID = !inputPasswordValue || inputPasswordValue === '';
        const INPUT_CONFIRM_PASSWORD_VALUE_IS_INVALID = !inputConfirmPasswordValue || inputConfirmPasswordValue !== inputPasswordValue;
        const INPUT_DATE_OF_BIRTH_VALUE_IS_INVALID = !inputDateOfBirthValue || inputDateOfBirthValue === '';

        if (INPUT_NAME_VALUE_IS_INVALID || INPUT_EMAIL_VALUE_IS_INVALID || INPUT_PASSWORD_VALUE_IS_INVALID || INPUT_DATE_OF_BIRTH_VALUE_IS_INVALID) {
            setFormIsValid(false);

            toast.error('Preencha corretamente os campos do formulario!', {
                position: 'top-center',
                theme: 'colored'
            });

            return;
        }

        if (INPUT_CONFIRM_PASSWORD_VALUE_IS_INVALID) {
            setFormIsValid(false);

            toast.error('As senhas nao conferem!', {
                position: 'top-center',
                theme: 'colored'
            });

            return;
        }

        if (!passwordIsValidFormat(inputPasswordValue)) {
            setFormIsValid(false);

            toast.error('Formato da senha invalido!', {
                position: 'top-center',
                theme: 'colored'
            });

            return;
        }

        setFormIsValid(true);

        navigate('/');

    };

    return (
        <React.Fragment>
            <ToastContainer />

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

                <Input
                    type='date'
                    placeholder='Sua data de nascimento'
                    value={inputDateOfBirthValue}
                    onChange={event => setInputDateOfBirthValue(event.target.value)}
                    hasError={!formIsValid}
                />

                <Styles.Button onClick={handleRegister}>Finalizar cadastro</Styles.Button>
                <Styles.Button onClick={() => navigate('/')}>Cancelar</Styles.Button>
            </Styles.Form>
        </React.Fragment>
    );
}