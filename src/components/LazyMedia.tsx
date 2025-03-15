import { useState } from 'react';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from './Loader';
import forest from '../assets/images/forest.png'

interface LazyMediaProps {
    mediaType: 'image' | 'video';
    src: string | undefined;
}



const LazyMedia = ({mediaType,src}:LazyMediaProps) => {
    const [loading, setLoading] = useState(true)

        return (
          <LazyLoadComponent >
                      {loading &&
                      
                      <Loader/>
                    }
                    {mediaType==='video'? 
                    <video
                    src={src}
                    className={`w-full h-full rounded-md object-fill  ${loading?"opacity-0":"opacity-100"}  `}
                    autoPlay
                    loop
                    muted
                    
                    
                    onCanPlayThrough={()=>setLoading(false)}
                    
                    onError={()=>setLoading(true)}
                  />:

                    <img
                    src={forest}
                    className={`w-full h-full rounded-md object-fill  ${loading?"opacity-0":"opacity-100"}  `}

                    onLoad={()=>setLoading(false)}
                    
                    onError={()=>setLoading(true)}
                    />
                }
          
          </LazyLoadComponent>
        )



}

export default LazyMedia