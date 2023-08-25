import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from './firebase';
import {  doc , getDoc } from 'firebase/firestore';

const Detail = () => {

    let { idvideo}  = useParams() ;
    const [video, setVideo] = useState({}) ;
    const [ loading , setLoading ] = useState(false) ; 

    const getOneVideo = async () => { 
        
        setLoading(true) ;

        const rqVideo = doc(firestore , 'videoss' , idvideo );
        const snapVideo = await getDoc(rqVideo) ;
      
        if(snapVideo.exists){
            setVideo(snapVideo.data()) ;
        }

        setLoading(false) ;
     }

     useEffect(()=>{

            getOneVideo() ;

     },[])

  return (
    <div>Detail :

        { loading? 'chargement' :
        
                video ? video.titre : 'pas de video'
        }

    </div>
  )
}

export default Detail