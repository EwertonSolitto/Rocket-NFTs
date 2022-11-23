const logo = require('../assets/logo.svg').default
const metaMaskLogo = require('../assets/logo_MetaMask.svg').default

export default function Header() {
  return (
    <header className="header grid gap-40 pt-14 h-28 max-w-7xl">
      <div className="flex items-center">
        <a href="/"><img src={logo} alt="Logo" width={265} height={43}/></a>
      </div>
      <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-around gap-16 text-white text-lg">
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">Comprar NFT</a></li>
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">Sobre</a></li>
          <li><a href="/" className="underline-offset-8 focus:underline hover:underline">FAQ</a></li>
        </ul>
      </nav>
      <div className="flex items-center justify-end">
        <button type="button" className="meta-mask-button flex justify-center items-center bg-white hover:bg-rose-500 focus:bg-rose-500 hover:text-white focus:text-white ease-out duration-300">
          <img src={metaMaskLogo} alt="Logo MetaMask" width={30} height={30}/>
          <span className="flex items-center font-bold pl-3">Conectar carteira</span>
        </button>
      </div>
    </header>
  )
}