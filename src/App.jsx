import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Ready from "./Components/Ready";
import Choose from "./Components/Choose";
import LatestNews from './Components/LatestNews.jsx';
import Newsletter from "./Components/Newsletter.jsx";
import Subscriber from "./Components/Subscriber";
import Footer from "./Components/Footer";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
     
      <Header />
      <Hero />
      <Choose />
       <LatestNews/>
      {/* <Newsletter /> */}
      <Subscriber />
      {/* <Ready /> */}
      <Footer />
       <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
