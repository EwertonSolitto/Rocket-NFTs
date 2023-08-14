import Gallery from "./gallery/Gallery"
import Badge from "./svgs/Badge"

const groupAvatars = require('../assets/group-avatars.png')

export default function Main () {
  return (
    <main className="md:pt-24 pt-12 md:px-0 px-3">
        <div className="main grid md:grid-flow-col gap-16 mx-auto text-white md:max-w-none max-w-lg">
        <div className="flex">
          <div className="xl:w-96">
            <p className="lg:text-lg md:text-base text-lg pb-14 pt-2">
              Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
            </p>
            <div className="flex gap-2 lg:flex-row md:flex-col">
              <img src={groupAvatars} alt="Grupo de avatares" className="lg:h-auto md:h-20 md:w-40" width={160} height={84}/>
              <div className="flex flex-col justify-end">
                <span className="lg:text-lg md:text-base text-lg font-bold">+10</span>
                <span className="lg:text-lg md:text-base text-lg">Artistas selecionados</span>
              </div>
            </div>
          </div>
        </div>
        <div>
            <h1 className="main-text font-bold">Descubra a verdadeira arte digital e colecione diversas <span className="text-rose-500">NFTs</span></h1>         
        </div>
        <div className="flex items-center justify-end mx-auto">
          <Badge width={200} height={200}/>
        </div>
      </div>
        <Gallery />
    </main>
  )
}