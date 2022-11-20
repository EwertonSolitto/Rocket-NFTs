const logo = require('../assets/logo.svg').default
const metaMaskLogo = require('../assets/logo_MetaMask.svg').default

export default function Header() {
  return (
    <header className="header grid gap-40 pt-14 h-28 max-w-7xl">
      <div className="flex items-center">
        <a href="/"><img src={logo} alt="Logo" width={265} height={43}/></a>
      </div>
      <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-around text-white text-lg">
          <li><a href="/">Comprar NFT</a></li>
          <li className="px-16"><a href="/">Sobre</a></li>
          <li><a href="/">FAQ</a></li>
        </ul>
      </nav>
      <div className="flex items-center justify-end">
        <button type="button" className="meta-mask-button flex justify-center align-center bg-white">
          <img src={metaMaskLogo} alt="Logo MetaMask" width={30} height={30}/>
          <div className="flex items-center font-bold pl-3">Conectar carteira</div>
        </button>
      </div>
    </header>
  )
}