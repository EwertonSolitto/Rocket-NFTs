interface ArtistCardProps {
  name: string,
  photographQuantity: number,
  src: string,
  alt: string
}

export default function ArtistCard(props: ArtistCardProps) {
  return (
    <a href="/" className="artist-card flex justify-center items-center gap-10 bg-neutral-800 text-rose-500 hover:bg-rose-500 hover:text-white ease-out duration-300">
      <img src={props.src} alt={props.alt} />
      <div className="text-xl font-medium">
        <h3 className="text-white">{props.name}</h3>
        <span>{props.photographQuantity} Fotografias</span>
      </div>
    </a>
  )
}