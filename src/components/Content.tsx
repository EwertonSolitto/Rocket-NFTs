import ArtCard from "./card/ArtCard"
import ArtistCard from "./card/ArtistCard"

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

const topRightOrangeArrow = require('../assets/arrow-orange.svg').default

export default function Content() {
  return (
    <div className="flex flex-col items-center background-dark w-full text-white">
      <section className="grid info-section max-w-8xl gray-border-bottom">
        <div className="flex flex-col items-center justify-center gap-16 gray-border-right">
          <div>
            <h2 className="text-5xl font-semibold text-center pt-1">10K+</h2>
            <p className="text-xl font-semibold text-center text-gray-subtitle">Artes</p>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-center pt-1">200+</h2>
            <p className="text-xl font-semibold text-center text-gray-subtitle">Vendas</p>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-center pt-1">20</h2>
            <p className="text-xl font-semibold text-center text-gray-subtitle">Artistas</p>
          </div>
        </div>
        <div className="pt-16">
          <div className="flex gap-32 pl-16 pb-16 text-lg">
            <div>
              <p className="pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className="logo-color">potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
              <span className="underline">Lorem ipsum</span>
            </div>
            <div>
              <p className="pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className="logo-color">potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
              <span className="underline">Lorem ipsum</span>
            </div>
          </div>
          <div><img src={banner} alt="Banner de um homem usando um óculos diferente" /></div>
        </div>
      </section>
      <section className="max-w-7xl w-full pb-16">
        <h2 className="text-5xl font-bold py-40"><span className="logo-color">Populares</span> da Semana</h2>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-12 pr-68 gray-border-right">
            <ArtCard astronaut="Astronauta 1" name="Mayk Brito" price={1.50} src={astronaut1} alt='Imagem do astronauta 1'/>
            <ArtCard astronaut="Astronauta 2" name="Jakeliny Gracielly" price={2.0} src={astronaut2} alt='Imagem do astronauta 2'/>
          </div>
          <div className="flex flex-col gap-12">
            <ArtCard astronaut="Astronauta 3" name="João Inácio (Biro)" price={3.75} src={astronaut3} alt='Imagem do astronauta 3'/>
            <ArtCard astronaut="Astronauta 4" name="Tamires Santos" price={4.30} src={astronaut4} alt='Imagem do astronauta 4'/>
          </div>
        </div>
      </section>
      <section className="max-w-7xl w-full pt-20 pb-36">
        <h2 className="text-5xl font-bold text-center pb-32">Melhores <span className="logo-color">Artistas</span></h2>
        <div className="flex flex-col gap-28">
          <div className="flex justify-between">
            <ArtistCard name="Mayk Brito" photographQuantity={80} src={artist1} alt="Foto do perfil de Mayk Brito"/>
            <ArtistCard name="Jakeliny G." photographQuantity={99} src={artist2} alt="Foto do perfil de Jakeliny G."/>
            <ArtistCard name="João I. (Biro)" photographQuantity={50} src={artist3} alt="Foto do perfil de João I. (Biro)"/>
          </div>
          <div className="flex justify-between">
            <ArtistCard name="Tamires Santos" photographQuantity={43} src={artist4} alt="Foto do perfil de Tamires Santos"/>
            <ArtistCard name="Ana Silva" photographQuantity={28} src={artist5} alt="Foto do perfil de Ana Silva"/>
            <ArtistCard name="Diego F." photographQuantity={20} src={artist6} alt="Foto do perfil de Diego F."/>
          </div>
        </div>
        <a href="/" className="flex justify-center gap-8 pt-14">
          <span className="text-xl">Ver todos os artistas</span>
          <img src={topRightOrangeArrow} alt="Seta laranja mirando para o canto superior direito" />
        </a>
      </section>
    </div>
  )
}