import Card from '../../components/PagesComponents/Card/Card';
import './home.sass'

const data=[
  {
    imageUrl:'../../../assets/ImagesCards/colorea.svg',
    name:'Pinta y colorea',
    stars:3
  },
  {
    imageUrl:'../../../assets/ImagesCards/memoria.svg',
    name:'Juego de memoria',
    stars:3
  },
  {
    imageUrl:'../../../assets/ImagesCards/bloques.svg',
    name:'bloques',
    stars:4
  },
  {
    imageUrl:'../../../assets/ImagesCards/rompecabezas.svg',
    name:'Rompecabezas',
    stars:2
  },
]

const Home = () => {
  return (
      <div className="home">
        <h2>Recomendados</h2>
        <div className='cards'>
          {data.map(({imageUrl,name},i)=>
            (<Card 
              key={i}
              imageUrl={imageUrl}
              name={name}
              />)
              )}       
        </div>
      </div>
    )
};

export default Home;
