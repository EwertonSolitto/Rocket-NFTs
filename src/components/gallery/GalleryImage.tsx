export default function GalleryImage (props: any) {
  return (
    <img src={props.src} alt={props.alt} className="border border-white"/>
  )
}