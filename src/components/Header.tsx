import CloseMenu from "./svgs/CloseMenu"
import OpenMenu from "./svgs/OpenMenu"
import MetaMaskLogo from "./svgs/logos/MetaMaskLogo"
import RocketBlogLogo from "./svgs/logos/RocketBlogLogo"

export default function Header() {
  return (
    <header className="grid items-center justify-center md:grid-cols-3 grid-cols-2 md:pt-14 pt-7 h-28 md:px-0 px-3 md:max-w-none max-w-lg">
      <div className="flex items-center">
        <a href="/" id="header-logo"><RocketBlogLogo width={265} height={43}/></a>
      </div>
      <nav className="hidden items-center justify-between m-auto md:flex">
        <ul className="md:flex items-center justify-between xl:gap-16 lg:gap-8 md:gap-4 text-white text-lg">
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">Comprar NFT</a></li>
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">Sobre</a></li>
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">FAQ</a></li>
        </ul>
      </nav>
      <button type="button" className="meta-mask-button hidden md:flex justify-center items-center bg-white ml-auto hover:bg-rose-500 focus:bg-rose-500 hover:text-white focus:text-white ease-out duration-300 md:py-2 md:px-4 ">
          <MetaMaskLogo />
        <span className="flex items-center font-bold lg:pl-3 pl-2">Conectar carteira</span>
      </button>
      <div className="md:hidden ml-auto">
        <button>
          <OpenMenu />
        </button>
        <button className="hidden">
          <CloseMenu />
        </button>
      </div>
    </header>
  )
}