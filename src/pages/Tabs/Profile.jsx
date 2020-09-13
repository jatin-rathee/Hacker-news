import React from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonRow,
  IonCol,
  IonButton,
  IonGrid,
} from "@ionic/react";
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargeHeader";

import { toast } from "../../helpers/toast";
import firebase from "../../firebase";
import UserContext from "../../context/UserContext";
import { mailOutline, personCircleOutline } from "ionicons/icons";

const Profile = (props) => {
  const { user } = React.useContext(UserContext);

  async function logoutUser() {
    try {
      await firebase.logout();
      props.history.push("/");
      toast("You have logged out successfully.");
    } catch (err) {
      console.err("Logout Error", err);
      toast(err.message);
    }
  }

  return (
    <IonPage>
      <SmallHeader title="Profile" />
      <IonContent fullscreen>
        <LargeHeader title="Profile" />
        {user ? (
          <>
            <IonCard>
              <IonCardContent>
                <IonList lines="none">
                  <IonItem>
                    <IonIcon icon={personCircleOutline} slot="start" />
                    <IonLabel>
                      <IonLabel>
                        <strong>{user.displayName}</strong>
                        <p>Username</p>
                      </IonLabel>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={mailOutline} slot="start" />
                    <IonLabel>
                      <IonLabel>
                        <strong>{user.email}</strong>
                        <p>Email</p>
                      </IonLabel>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={"/edit-profile"}
                  color="primary"
                  fill="outline"
                >
                  Edit Profile
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={logoutUser}>
                  Log Out
                </IonButton>
              </IonCol>
            </IonRow>
          </>
        ) : (
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={"/signup"}
                  color="primary"
                >
                  Sign Up
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={"/login"}
                  color="primary"
                  fill="outline"
                >
                  Log In
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
