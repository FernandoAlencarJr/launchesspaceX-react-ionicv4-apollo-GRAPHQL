import React, { useCallback, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonProgressBar, IonModal, IonGrid, IonRow, IonCol,} from '@ionic/react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import { LAUNCH_2_QUERY } from '../graphql/rockets';
import LaunchDetail from '../components/LaunchDetail';
import ImageViewer from '../components/ImageViewer';








const LaunchPage: React.FC = () => {
    const { id } = useParams< { id:string } >()

    const { data, loading } = useQuery( LAUNCH_2_QUERY ,{
        variables:   { id } 
    })
    const handleSelectImage =useCallback((url:string)=>{
        setSelectedImage(url)
        console.log(url)
    },[])
    const [ SelectedImage , setSelectedImage ] = useState ('')


    const handleModalClose = useCallback( () => setSelectedImage(''),[])
    
return(

    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonBackButton defaultHref='/launchespage'/>
            </IonButtons>
            <IonTitle>Launch</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className = 'ion-padding'>
            <IonGrid fixed>
                <IonRow>
                    <IonCol sizeLg='8' offsetLg='2'>
                    { loading ?  <IonProgressBar color="primary" value={1.0} type='indeterminate'></IonProgressBar> 
            :  <LaunchDetail launch={data!.launch} onSelectImage={ handleSelectImage }/> }
                    </IonCol>
                </IonRow>

            </IonGrid>
        </IonContent>
        <IonModal isOpen={ !!SelectedImage } onDidDismiss={handleModalClose}>
          <ImageViewer src={SelectedImage} onClose={handleModalClose}/>
        </IonModal>
    </IonPage>

    )
}





export default LaunchPage