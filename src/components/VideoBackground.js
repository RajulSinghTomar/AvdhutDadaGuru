import VideoBg from '../assets/Videos/VideoBg2.mp4'
const VideoBackground = () => {
    return <div className="w-screen">
      <iframe className="w-screen aspect-video"
        title='VideoBackground'
        src= {VideoBg}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen
         >
      </iframe>
    </div>
}
export default VideoBackground;