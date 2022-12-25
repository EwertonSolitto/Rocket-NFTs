import Gallery from "./gallery/Gallery"
import Badge from "./svgs/Badge"

const groupAvatars = require('../assets/group-avatars.png')

export default function Main () {
  return (
    <main className="max-w-7xl pt-24">
        <div className="main grid gap-10 text-white">
        <div className="flex">
          <div className="w-96">
            <h1 className="text-lg pb-14 pt-2">
              Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
            </h1>
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
            <p className="main-text font-bold">Descubra a verdadeira arte digital e colecione diversas <span className="text-rose-500">NFTs</span></p>         
        </div>
        <div className="flex items-center justify-end">
          <Badge width={200} height={200}/>
        </div>
      </div>
        <Gallery />
    </main>
  )
}