import React, { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {  Launch } from '../generated/graphql';
import { LAUNCH_QUERY } from '../graphql/rockets';
import Launches from './Launches';
import { IonButton, IonProgressBar, IonGrid, IonRow, IonCol } from '@ionic/react';


const Launchescomp : React.FC = () => {
    const { data , loading , fetchMore } = useQuery( LAUNCH_QUERY , {
        variables: { limit: 5 , offset: 0}
    })
    const [ offset , setOffset ] = useState<number>(0)
    const [ limit ] = useState<number>(5)
    const [ finished , setFinished ] = useState(false)
    const handLoadMore = useCallback( () => {
        setOffset( limit + offset ) 
    }, [ limit, offset ] )
    useEffect( () => {
        console.log('offset changed :' , offset)
        if( offset > 0 ){
            fetchMore<'offset'>({
                variables: {
                    offset,
                },
                
                
                updateQuery ( previous , { fetchMoreResult } ) {
                    if(!fetchMoreResult){
                        return previous
                        
                    }
                    if(fetchMoreResult.launchesPast.lenght < limit){
                        setFinished(true)
                    }
                    return {
                        ...previous,
                        launchesPast:[
                            ...previous.launchesPast,
                            ...fetchMoreResult.launchesPast],
                        }
                },
            })
        }
    },
            [ fetchMore , offset , limit ] )

    return(
        <IonGrid fixed className='ion-no-padding'>
        <IonRow>
            
        {loading ? (<IonCol><IonProgressBar color="primary" value={1.0} type='indeterminate'></IonProgressBar></IonCol>) : 
        (data && data.launchesPast.map( ( launch:any )  => (
        <IonCol key ={ launch.id } size='12' sizeSm='6' sizeLg='4' className='ion-no-padding'>
         <Launches  launch = { launch as Launch} />
         </IonCol>
        )))}
        
        </IonRow>
        {!loading && !finished ?
        (<IonRow>
        <IonCol>
        <IonButton expand = "block" onClick = { handLoadMore }> CARREGAR MAIS ... </IonButton>
        </IonCol>
        </IonRow>) :null}
        
        </IonGrid>
    )
}

export default Launchescomp