import loading_vid from '../assets/loading.mp4'
import { cn } from '@/lib/utils'

const Loader = ({className}:{className?:string}) => {
  return (
    <video
    src={loading_vid}
    className={cn("w-full h-full rounded-md object-fill  ",className)}
    autoPlay
    loop
    muted
  />
  )
}

export default Loader