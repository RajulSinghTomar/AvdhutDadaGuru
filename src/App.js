import NavBar from "./components/NavBar";
import {Routes,Route} from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import { Mission } from "./components/Mission";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Achievement from "./components/Achievement";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NewsGallery from "./components/NewsGallery";
import Videos from "./components/Videos";
import Images from "./components/Images";
import MediaVideos from "./components/MediaVideos";
function App() {
  return (
    <div>
      <NavBar />
      <SocialLinks/>
      <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/mission" element={<Mission />}/>
        <Route path="/achievement" element={ <Achievement />}/>
        <Route path="/news" element={ <NewsGallery />}/>
        <Route path="/videos" element={ <Videos />}/>
        <Route path="/images" element={ <Images />}/>
        <Route path="/newsVideos" element={ <MediaVideos />}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
