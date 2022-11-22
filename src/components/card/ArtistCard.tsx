interface ArtistCardProps {
  name: string,
  photographQuantity: number,
  src: string,
  alt: string
}

export default function ArtistCard(props: ArtistCardProps) {
  return (
    <a href="/" className="artist-card flex justify-center items-center gap-10">
      <img src={props.src} alt={props.alt} />
      <div className="text-xl font-medium">
        <h3>{props.name}</h3>
        <span className="logo-color">{props.photographQuantity} Fotografias</span>
      </div>
    </a>
  )
}