import ArtCard from "./card/ArtCard"

const astronaut1 = require('../assets/astronauta-1.png')
const astronaut2 = require('../assets/astronauta-2.png')
const astronaut3 = require('../assets/astronauta-3.png')
const astronaut4 = require('../assets/astronauta-4.png')
const banner = require('../assets/banner.png')

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
      <section className="max-w-7xl flex-col w-full pb-16">
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
    </div>
  )
}