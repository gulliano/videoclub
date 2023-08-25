import React, { useEffect, useState } from 'react'
import {firestore} from './firebase' ;
import {query,getDocs , collection} from 'firebase/firestore'
import Video from './Video';

const Liste = () => {

    const [ videos , setVideos ] = useState([]) ;
    const [ loading , setLoading ] = useState(false) ;

   const getAllVideo = async () => {

        setLoading(true) ;

        const rqVideo = query(collection(firestore,"videos"));
        const snapVideo = await getDocs(rqVideo) ;
       
      if(!snapVideo.empty){

        const tempData = snapVideo.docs.map( dataVideo => {
            return { id:dataVideo.id , ...dataVideo.data() }
        })

        setVideos(tempData) ;

      }

      setLoading(false)
    }

    useEffect(()=>{

        getAllVideo();

    }, []);




  return (
    <div>
            {
            loading
            ?'Chargement':

                videos.map(videoItem=><Video key={videoItem.id}  data={videoItem} />)
            
            
            
            }



    </div>
  )
}

export default Liste