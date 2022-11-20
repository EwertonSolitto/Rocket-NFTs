const logo = require('../assets/logo.svg').default
const metaMaskLogo = require('../assets/logo_MetaMask.svg').default

export default function Header() {
  return (
    <header className="flex justify-between items-center w-320 pt-14 h-28">
      <a href="/"><img src={logo} alt="Logo" width={265} height={43}/></a>
      <ul className="flex items-center justify-around">
        <li className="text-white"><a href="/">Comprar NFT</a></li>
        <li className="text-white px-16 text-lg"><a href="/">Sobre</a></li>
        <li className="text-white"><a href="/">FAQ</a></li>
      </ul>
      <button type="button" className="flex justify-center align-center w-56 h-12 bg-white">
        <img src={metaMaskLogo} alt="Logo MetaMask" width={30} height={30}/>
        <div className="flex items-center font-bold pl-3">Conectar carteira</div>
      </button>
    </header>
  )
}