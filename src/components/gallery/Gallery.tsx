import GalleryImage from "./GalleryImage";
const photo1 = require('../../assets/galeria-1.png')
const photo2 = require('../../assets/galeria-2.png')
const photo3 = require('../../assets/galeria-3.png')
const photo4 = require('../../assets/galeria-4.png')
const photo5 = require('../../assets/galeria-5.png')
const photo6 = require('../../assets/galeria-6.png')
const photo7 = require('../../assets/galeria-7.png')
const photo8 = require('../../assets/galeria-8.png')

export default function Gallery() {
  return (
    <div className="grid xl:grid-cols-4 grid-cols-2 gap-8 pt-24">
        <GalleryImage src={photo1} alt="Foto 1"/>
        <GalleryImage src={photo2} alt="Foto 2"/>
        <GalleryImage src={photo3} alt="Foto 3"/>
        <GalleryImage src={photo4} alt="Foto 4"/>
        <GalleryImage src={photo5} alt="Foto 5"/>
        <GalleryImage src={photo6} alt="Foto 6"/>
        <GalleryImage src={photo7} alt="Foto 7"/>
        <GalleryImage src={photo8} alt="Foto 8"/>
    </div>
  )
}