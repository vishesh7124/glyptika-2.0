import { useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { cn } from '@/lib/utils';
import { BlurFade } from './magicui/blur-fade';

import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from './Loader';

interface LazyMediaProps {
    mediaType: 'image' | 'video';
    src: string | undefined;
    controls?: boolean;
    className?: string;
    loaderClass?:string
}



const LazyMedia = ({mediaType,src,controls,className,loaderClass}:LazyMediaProps) => {
    const [loading, setLoading] = useState(true)

        return (
          <LazyLoadComponent >
                      {loading &&
                      
                      <Loader className={loaderClass} />
                    }
                    {mediaType==='video'? 
                    <video
                    src={src}
                    className={cn(`w-full h-full rounded-md object-fill  ${loading?"opacity-0 hidden ":"opacity-100"}  `,className)}
                    autoPlay
                    loop
                    muted
                    controls={controls}
                    
                    onCanPlayThrough={()=>setLoading(false)}
                    
                    onError={()=>setLoading(true)}
                  />:
                      <BlurFade delay={1}>

                        <img
                        src={src}
                        className={cn(`w-full h-full rounded-md object-fill  ${loading?"opacity-0 hidden":"opacity-100"}  `,className)}
    
                        onLoad={()=>setLoading(false)}
                        
                        onError={()=>setLoading(true)}
                        />
                      </BlurFade>
                }
          
          </LazyLoadComponent>
        )



}

export default LazyMedia