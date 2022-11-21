import Gallery from "./gallery/Gallery"

const groupAvatars = require('../assets/group-avatars.png')
const badge = require('../assets/badge.svg').default

export default function Main () {
  return (
    <main className="max-w-7xl pt-24">
        <div className="main grid gap-10 text-white">
        <div className="flex">
          <div className="w-96">
            <p className="text-lg pb-14 pt-2">
              Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
            </p>
            <div className="flex gap-2">
              <img src={groupAvatars} alt="Grupo de avatares" />
              <div className="flex flex-col justify-end">
                <span className="text-lg font-bold">+10</span>
                <span className="text-lg">Artistas selecionados</span>
              </div>
            </div>
          </div>
        </div>
        <div>
            <p className="main-text font-bold">Descubra a verdadeira arte digital e      colecione diversas <span className="logo-color">NFTs</span></p>         
        </div>
        <div className="flex items-center justify-end">
          <img src={badge} alt="Medalha Explore a Arte" width={200} height={200}/>
        </div>
      </div>
        <Gallery />
    </main>
  )
}