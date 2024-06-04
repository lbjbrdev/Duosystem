import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Header } from '../../components/header';

import * as Styles from './styles';

export function Home() {
    React.useEffect(() => {
        toast.success('Login efetuado com sucesso! Seja bem vindo :)', {
            position: 'top-center',
            theme: 'colored'
        });
    }, []);

    return (
        <React.Fragment>
            <ToastContainer />

            <Header isAuthenticated />

            <Styles.Container>
                <Styles.Title>Seja bem vindo</Styles.Title>
            </Styles.Container>
        </React.Fragment>
    );
}