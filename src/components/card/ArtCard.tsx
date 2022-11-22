const topRightArrow = require('../../assets/arrow-white.svg').default

interface ArtCardProps {
  astronaut: string,
  name: string,
  price: number,
  src: string,
  alt: string
}

export default function ArtCard(props: ArtCardProps) {
  return (
    <div>
      <div>
        <h2>{props.astronaut}</h2>
        <img src={topRightArrow} alt="seta mirando para o canto superior direito" />
      </div>
      <div>
        <span>{props.name}</span><span className="logo-color">{props.price} RKT</span>
      </div>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}