import React from 'react'
import { IonPage, IonContent, IonLabel, IonInput, IonItem, IonRow, IonCol, IonButton } from '@ionic/react'
import NavHeader from '../../components/Header/NavHeader'
import validatePasswordReset from '../../validators/validatePasswordReset'

import useForm from '../../hooks/useForm'
import firebase from '../../firebase'
import { toast } from '../../helpers/toast'

const INITIAL_STATE = {
    email: ""
}

const Forgot = () => {

    const { handleSubmit, handleChange, values, isSubmitting } = useForm(INITIAL_STATE, validatePasswordReset, handleResetPassword)
    const [busy, setBusy] = React.useState(false)

    async function handleResetPassword() {
        setBusy(true)
        const {email} = values
        try {
            await firebase.resetPassword(email)
            toast("Check your email to reset your password.")
        } catch (err) {
            console.error("Password Reset Error", err)
            toast(err.message)
        }
    }

    return (
        <IonPage>
            <NavHeader title='Password Reset'/>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position='floating'>Email</IonLabel>
                    <IonInput name='email' type='text' onIonChange={handleChange} value={values.email} required />
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type='submit' color='primary' onClick={handleSubmit} disabled={isSubmitting} expand='block'>
                            Get Reset Link!
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
        )
}

export default Forgot
