import React from 'react';
import { Launch } from '../generated/graphql';
import { IonCard, IonItem, IonAvatar, IonImg, IonText, IonIcon, IonCardContent, IonRow, IonCol, IonThumbnail,  } from '@ionic/react';
import { checkmark , close } from 'ionicons/icons';
import Styles from './LaunchDetail.module.scss';
import noPhoto from '../assets/images/no-photo.svg'


interface Props {
    launch :Launch
    onSelectImage?:(url:string) => void
}




const LaunchDetail :React.FC<Props> = props => {
    const { launch , onSelectImage = () => null} = props
    return (
        <IonCard>
            <IonItem lines='none'>
            <IonAvatar slot='start'>
            <IonImg src={launch.links.mission_patch_small} />
            </IonAvatar>
            <IonText color='dark'>
            <h2 className='ion-no-margin'>{launch.mission_name}</h2>
            <h2 className='ion-no-margin'>{launch.rocket.rocket_name}</h2>
            </IonText>
            <IonIcon slot='end' 
            color={launch.launch_success ? 'success' : 'danger'} 
            icon={launch.launch_success ? checkmark : close} />
            </IonItem>
            <IonImg src={launch.links.flickr_images[0] || noPhoto } className={Styles.img}/>
            <IonCardContent>
                {launch.details}
            </IonCardContent>
        {   launch.links.flickr_images.length ?         <IonCardContent>
                <IonRow>
                    {  launch.links.flickr_images.map(image => (
                        <IonCol key={image} size='3'>
                            <IonThumbnail className={Styles.thumb} onClick={()=>onSelectImage(image)}>
                                <IonImg src={image || noPhoto}/>
                            </IonThumbnail>
                        </IonCol>
                    ))}
                </IonRow>
            </IonCardContent> : null}
        </IonCard>
    )
}


export default LaunchDetail