import ArrowWhite from "../svgs/arrows/ArrowWhite"

interface ArtCardProps {
  astronaut: string,
  name: string,
  price: number,
  src: string,
  alt: string
}

export default function ArtCard(props: ArtCardProps) {
  return (
    <a href="/" className="flex flex-col gap-6 mr-3 hover:scale-110 focus:scale-110 ease-out duration-500">
      <div className="flex justify-between pb-5">
        <h3 className="text-3xl text-white font-medium">{props.astronaut}</h3>
        <ArrowWhite width={25} height={25} />
      </div>
      <div className="flex justify-between text-xl">
        <span className="text-neutral-600 font-semibold">{props.name}</span>
        <span className="text-rose-500">{props.price} RKT</span>
      </div>
      <img src={props.src} alt={props.alt} width={350} height={200}/>
    </a>
  )
}