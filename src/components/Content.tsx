import ArtCard from "./card/ArtCard"
import ArtistCard from "./card/ArtistCard"
import ArrowOrange from "./svgs/arrows/ArrowOrange"

const banner = require('../assets/banner.png')

const astronaut1 = require('../assets/astronauta-1.png')
const astronaut2 = require('../assets/astronauta-2.png')
const astronaut3 = require('../assets/astronauta-3.png')
const astronaut4 = require('../assets/astronauta-4.png')

const artist1 = require('../assets/artista-1.png')
const artist2 = require('../assets/artista-2.png')
const artist3 = require('../assets/artista-3.png')
const artist4 = require('../assets/artista-4.png')
const artist5 = require('../assets/artista-5.png')
const artist6 = require('../assets/artista-6.png')

export default function Content() {
  return (
    <>
      <section className="flex flex-col items-center bg-stone-900 w-full text-white border-y border-y-neutral-600">
        <div className="grid info-section md:px-0 px-3">
        <div className="flex lg:flex-col items-center justify-center md:gap-16 gap-8 lg:border-r lg:border-r-neutral-600 lg:border-b-0 border-b border-b-neutral-600 lg:py-0 py-6">
          <div>
            <p className="md:text-5xl sm:text-4xl text-3xl font-semibold text-center pt-1">10K+</p>
            <p className="md:text-xl text-base font-semibold text-center text-neutral-600">Artes</p>
          </div>
          <div>
            <p className="md:text-5xl sm:text-4xl text-3xl font-semibold text-center pt-1">200+</p>
            <p className="md:text-xl text-base font-semibold text-center text-neutral-600">Vendas</p>
          </div>
          <div>
            <p className="md:text-5xl sm:text-4xl text-3xl font-semibold text-center pt-1">20</p>
            <p className="md:text-xl text-base font-semibold text-center text-neutral-600">Artistas</p>
          </div>
        </div>
        <div className="lg:pt-16 pt-10">
          <div className="flex lg:gap-32 gap-16 lg:pl-16 pb-16 text-lg">
            <div>
              <p className="pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className="text-rose-500">potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
              <span className="underline">Lorem ipsum</span>
            </div>
            <div>
              <p className="pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className="text-rose-500">potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
              <span className="underline">Lorem ipsum</span>
            </div>
          </div>
          <div><img src={banner} alt="Banner de um homem usando um óculos diferente" /></div>
        </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-stone-900 w-full text-white">
        <div className="md:pb-16 pb-8 md:px-0 px-3">
          <h2 className="text-5xl font-bold md:py-40 sm:py-24 py-20"><span className="text-rose-500">Populares</span> da Semana</h2>
          <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-16">
            <div className="flex lg:flex-col sm:flex-row flex-col gap-12">
              <ArtCard astronaut="Astronauta 1" name="Mayk Brito" price={1.50} src={astronaut1} alt='Imagem do astronauta 1'/>
              <ArtCard astronaut="Astronauta 2" name="Jakeliny Gracielly" price={2.0} src={astronaut2} alt='Imagem do astronauta 2'/>
            </div>
            <div className="neutral-line lg:w-px h-px bg-neutral-600"></div>
            <div className="flex lg:flex-col sm:flex-row flex-col gap-12">
              <ArtCard astronaut="Astronauta 3" name="João Inácio (Biro)" price={3.75} src={astronaut3} alt='Imagem do astronauta 3'/>
              <ArtCard astronaut="Astronauta 4" name="Tamires Santos" price={4.30} src={astronaut4} alt='Imagem do astronauta 4'/>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-stone-900 w-full text-white">
        <div className="md:pt-20 pt-16 md:pb-36 pb-20">
          <h2 className="text-5xl font-bold text-center md:pb-32 pb-20">Melhores <span className="text-rose-500">Artistas</span></h2>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 2xl:gap-28 xl:gap-24 gap-12 items-center pb-14">
              <ArtistCard name="Mayk Brito" photographQuantity={80} src={artist1} alt="Foto do perfil de Mayk Brito"/>
              <ArtistCard name="Jakeliny G." photographQuantity={99} src={artist2} alt="Foto do perfil de Jakeliny G."/>
              <ArtistCard name="João I. (Biro)" photographQuantity={50} src={artist3} alt="Foto do perfil de João I. (Biro)"/>
              <ArtistCard name="Tamires Santos" photographQuantity={43} src={artist4} alt="Foto do perfil de Tamires Santos"/>
              <ArtistCard name="Ana Silva" photographQuantity={28} src={artist5} alt="Foto do perfil de Ana Silva"/>
              <ArtistCard name="Diego F." photographQuantity={20} src={artist6} alt="Foto do perfil de Diego F."/>
          </div>
          <div className="flex justify-center">
            <a href="/" className="w-72 flex justify-between underline-offset-4 focus:underline hover:underline">
              <span className="text-xl">Ver todos os artistas</span>
              <ArrowOrange width={25} height={26}/>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}