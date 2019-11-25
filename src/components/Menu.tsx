import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonText, IonMenuToggle } from '@ionic/react';
import { Components } from "@ionic/core";
import { locate } from 'ionicons/icons';



interface Props extends Partial<Components.IonMenu>{
    title?: string
    toolbarColor?:string
    links?:Link[]
}
interface Link {
    path:string,
    title:string,
    icon:any,
    direction:'none' | 'forward' | 'back'
}
const defaultLink: Link[] = [
    { path :'/launchespage' , title:'Launches' , icon:locate , direction:'back' }
]

const Menu: React.FC <Props>=  props => {
const { title = 'Menu', toolbarColor ='tertiary' , contentId='main-content'  , links= defaultLink , ...rest } = props
    return(
        <IonMenu contentId={contentId} {...rest}>
            <IonHeader>
                <IonToolbar color={toolbarColor}>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList lines='none'>
                    <IonMenuToggle menu={props.menuId} autoHide={false}>
                {links.map(links => (
                    <IonItem key={links.path} button routerLink={links.path} routerDirection={links.direction}>
                        <IonIcon icon={links.icon} color={toolbarColor} slot='start'/>
                        <IonText color={toolbarColor}>{links.title}</IonText>
                    </IonItem>
                ))}
                </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}


export default Menu