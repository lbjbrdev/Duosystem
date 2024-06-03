import React from 'react';
import * as Styles from './styles';
import { Header } from '../../components/header';

export function Home() {
    return (
        <React.Fragment>
            <Header isAuthenticated />

            <Styles.Container>
                <Styles.Title>Seja bem vindo Lucas</Styles.Title>
            </Styles.Container>
        </React.Fragment>
    );
}