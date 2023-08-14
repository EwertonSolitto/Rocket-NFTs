import { useState } from "react"
import CloseMenu from "./svgs/CloseMenu"
import OpenMenu from "./svgs/OpenMenu"
import MetaMaskLogo from "./svgs/logos/MetaMaskLogo"
import RocketBlogLogo from "./svgs/logos/RocketBlogLogo"

export default function Header() {
  const [menu, setMenu] = useState('hidden')

  return (
    <header className={`grid items-center justify-center md:grid-cols-3 grid-cols-2 md:pt-14 pt-7 h-28 md:px-0 px-3 md:min-w-0 min-w-full ${menu === 'hidden' ? '' : 'mb-16'}`}>
      <div className="flex items-center">
        <a href="/" id="header-logo" aria-labelledby="Voltar para a home"><RocketBlogLogo width={265} height={43}/></a>
      </div>
      <nav className={`items-center justify-between m-auto md:flex ${menu} top-28 right-3 mb:p-0 p-2 md:border-0 border-2 border-neutral-500`}>
        <ul className="md:flex items-center justify-between xl:gap-16 lg:gap-8 md:gap-4 text-white mb:text-lg">
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">Comprar NFT</a></li>
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">Sobre</a></li>
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">FAQ</a></li>
        </ul>
      </nav>
      <button type="button" className="meta-mask-button hidden md:flex justify-center items-center bg-white ml-auto hover:bg-rose-500 focus:bg-rose-500 hover:text-white focus:text-white ease-out duration-300 md:py-2 md:px-4" aria-labelledby="Conectar carteira Metamask">
          <MetaMaskLogo />
        <span className="flex items-center font-bold lg:pl-3 pl-2">Conectar carteira</span>
      </button>
      <div className="md:hidden ml-auto">
        <button onClick={() => {setMenu(() => {return 'absolute'})}} className={menu === 'hidden' ? "block" : 'hidden'}>
          <OpenMenu />
        </button>
        <button onClick={() => {setMenu(() => {return 'hidden'})}} className={menu === 'hidden' ? "hidden" : 'block'}>
          <CloseMenu />
        </button>
      </div>
    </header>
  )
}