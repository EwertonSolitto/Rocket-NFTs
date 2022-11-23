const topRightWhiteArrow = require('../../assets/arrow-white.svg').default

interface ArtCardProps {
  astronaut: string,
  name: string,
  price: number,
  src: string,
  alt: string
}

export default function ArtCard(props: ArtCardProps) {
  return (
    <a href="/" className="flex flex-col gap-6 mr-3 hover:scale-110 ease-out duration-500">
      <div className="flex justify-between pb-5">
        <h2 className="text-3xl text-white font-medium">{props.astronaut}</h2>
        <img src={topRightWhiteArrow} alt="Seta branca mirando para o canto superior direito" width={25} height={25} />
      </div>
      <div className="flex justify-between text-xl">
        <span className="text-neutral-600 font-semibold">{props.name}</span>
        <span className="text-rose-500">{props.price} RKT</span>
      </div>
      <img src={props.src} alt={props.alt} />
    </a>
  )
}