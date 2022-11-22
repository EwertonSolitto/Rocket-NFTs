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
    <div className="flex flex-col gap-6 mr-3">
      <div className="flex justify-between pb-5">
        <h2 className="text-3xl text-white font-medium">{props.astronaut}</h2>
        <img src={topRightArrow} alt="seta mirando para o canto superior direito" width={25} height={25} />
      </div>
      <div className="flex justify-between text-xl">
        <span className="text-gray-subtitle font-semibold">{props.name}</span>
        <span className="logo-color">{props.price} RKT</span>
      </div>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}