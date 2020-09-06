import React from 'react'
import { IonPage, IonContent, IonLabel, IonInput, IonItem, IonRow, IonCol, IonButton } from '@ionic/react'
import NavHeader from '../../components/Header/NavHeader'

const SignUp = () => {
    return (
        <IonPage>
            <NavHeader title='Password Reset'/>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position='floating'>Email</IonLabel>
                    <IonInput name='email' type='text' required />
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type='submit' color='primary' expand='block'>
                            Get Reset Link!
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
        )
}

export default SignUp
