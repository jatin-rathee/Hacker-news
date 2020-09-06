import React from 'react'
import { IonPage, IonContent, IonLabel, IonInput, IonItem, IonRow, IonCol, IonButton, IonRouterLink } from '@ionic/react'
import NavHeader from '../../components/Header/NavHeader'

const Login = () => {
    return (
        <IonPage>
            <NavHeader title='Log In'/>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position='floating'>Username</IonLabel>
                    <IonInput name='name' type='text' required />
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position='floating'>Password</IonLabel>
                    <IonInput name='password' type='password' required />
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type='submit' color='primary' expand='block'>
                            Log In
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class='ion-text-center ion-padding-vertical'>
                        <IonRouterLink routerLink={'/forgot'}>Forgot Password?</IonRouterLink>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
        )
}

export default Login
