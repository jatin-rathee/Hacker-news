import React from 'react'
import { IonPage, IonContent, IonLabel, IonInput, IonItem, IonRow, IonCol, IonButton } from '@ionic/react'
import NavHeader from '../../components/Header/NavHeader'

const SignUp = () => {
    return (
        <IonPage>
            <NavHeader title='Sign Up'/>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position='floating'>Username</IonLabel>
                    <IonInput name='name' type='text' required />
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position='floating'>Email</IonLabel>
                    <IonInput name='email' type='text' required />
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position='floating'>Password</IonLabel>
                    <IonInput name='password' type='password' required />
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type='submit' color='primary' expand='block'>
                            Sign Up
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
        )
}

export default SignUp
