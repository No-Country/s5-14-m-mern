import { Navbar } from '../../components/PagesComponents/Navbar/Navbar';
import './favourites.sass'

const Favoritos = () => {
  return( 
    <div className="fav">
      <Navbar/>
      <h1>Estos son mis juegos favoritos</h1>
    </div>
  );
};

export default Favoritos;
