import { useRef, useEffect } from 'react';
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
  const latestNewsRef = useRef(null)
    useEffect(() => {
    const timer = setTimeout(() => {
      if (latestNewsRef.current) {
        latestNewsRef.current.scrollIntoView({
          behavior: "smooth", // smooth animation
          block: "start"
        });
      }
    }, 3000); // 5s delay

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <>
     
      <Header />
      <Hero />
      <Choose />
       <div ref={latestNewsRef}>
        <LatestNews />
      </div>
      {/* <Newsletter /> */}
      <Subscriber />
      {/* <Ready /> */}
      <Footer />
       <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
