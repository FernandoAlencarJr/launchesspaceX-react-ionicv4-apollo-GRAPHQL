import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/react';
import React from 'react';
import Launchescomp from '../components/Launchescomp';


 
const LaunchesPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
          <IonMenuButton/>
          </IonButtons>
          <IonTitle>SpaceX</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class ='ion-padding'>
        <Launchescomp/>
      </IonContent>
    </IonPage>
  );
};

export default LaunchesPage
