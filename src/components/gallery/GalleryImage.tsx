export default function GalleryImage (props: any) {
  return (
    <img src={props.src} alt={props.alt} className="border border-white 2xl:w-auto xl:w-64 md:w-auto sm:w-64 mx-auto"/>
  )
}