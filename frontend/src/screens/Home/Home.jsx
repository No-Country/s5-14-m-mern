import { Footer } from "../../components/PagesComponents/Footer/Footer";
import { Navbar } from "../../components/PagesComponents/Navbar/Navbar";
import './home.sass'

const Home = () => {
  return (
      <div className="home">
        <Navbar/>
        <div className="home-content">
          <h1 className="center">Soy el Home</h1>
          <Footer />
        </div>
      </div>
    )
};

export default Home;
