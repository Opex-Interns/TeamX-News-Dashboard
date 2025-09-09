import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Ready from "./Components/Ready";
import Choose from "./Components/Choose";
import LatestNews from './Components/LatestNews.jsx';
import Newsletter from "./Components/Newsletter.jsx";
import Subscriber from "./Components/Subscriber";


function App() {
  return (
    <>
     
      <Header />
      <Hero />
      <Choose />
       <LatestNews/>
      <Newsletter />
      <Subscriber />
      <Ready />
    </>
  );
}

export default App;
