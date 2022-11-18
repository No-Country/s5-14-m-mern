import Card from '../../components/PagesComponents/Card/Card';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
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
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  })

  return (
      <div className="home">
        <h2>Recomendados</h2>
        <div ref={sliderRef} className='cards keen-slider'>
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
