import React from 'react';
import { Launch } from '../generated/graphql';
import { IonCard, IonImg } from '@ionic/react';
import styles from './Launches.module.scss';
import { crop } from '../utils';
import noPhoto from '../assets/images/no-photo.svg'


interface Props {
    launch: Launch
}
const Launches: React.FC <Props> = props => {
    const { launch } = props
    

    return(
        <IonCard button 
        className = {styles.card} 
        routerLink={`/launchespage/${launch.id}`}
        routerDirection='forward'
        > 
        <IonImg src = {launch.links.flickr_images[0] || noPhoto} className={styles.img}/>
        <h2 className={styles.cardTitle}>{crop(launch.mission_name , false , 15)}</h2>
        <p className={styles.cardSubtitle}>{launch.rocket.rocket_name}</p>
        </IonCard>
    )
}

export default Launches