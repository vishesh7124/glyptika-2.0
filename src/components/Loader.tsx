import loading_vid from '../assets/loading_vid.mp4'

const Loader = () => {
  return (
    <video
    src={loading_vid}
    className="w-full h-full rounded-md object-fill  "
    autoPlay
    loop
    muted
  />
  )
}

export default Loader