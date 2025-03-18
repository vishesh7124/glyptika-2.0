import { useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from './Loader';

interface LazyMediaProps {
    mediaType: 'image' | 'video';
    src: string | undefined;
    controls?: boolean;
}



const LazyMedia = ({mediaType,src,controls}:LazyMediaProps) => {
    const [loading, setLoading] = useState(true)

        return (
          <LazyLoadComponent >
                      {loading &&
                      
                      <Loader/>
                    }
                    {mediaType==='video'? 
                    <video
                    src={src}
                    className={`w-full h-full rounded-md object-fill  ${loading?"opacity-0 hidden ":"opacity-100"}  `}
                    autoPlay
                    loop
                    muted
                    controls={controls}
                    
                    onCanPlayThrough={()=>setLoading(false)}
                    
                    onError={()=>setLoading(true)}
                  />:

                    <img
                    src={src}
                    className={`w-full h-full rounded-md object-fill  ${loading?"opacity-0 hidden":"opacity-100"}  `}

                    onLoad={()=>setLoading(false)}
                    
                    onError={()=>setLoading(true)}
                    />
                }
          
          </LazyLoadComponent>
        )



}

export default LazyMedia