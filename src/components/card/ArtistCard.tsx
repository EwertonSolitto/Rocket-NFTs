interface ArtistCardProps {
  name: string,
  photographQuantity: number,
  src: string,
  alt: string
}

export default function ArtistCard(props: ArtistCardProps) {
  return (
    <a href="/" className="artist-card flex justify-center items-center gap-10 h-32 w-72 xl:mx-auto bg-neutral-800 text-rose-500 hover:bg-rose-500 focus:bg-rose-500 hover:text-white focus:text-white ease-out duration-300">
      <img src={props.src} alt={props.alt} />
      <div className="sm:text-xl text-base font-medium">
        <h3 className="text-white">{props.name}</h3>
        <span className="sm:text-base text-sm">{props.photographQuantity} Fotografias</span>
      </div>
    </a>
  )
}