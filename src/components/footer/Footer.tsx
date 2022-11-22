import FooterList from "./FooterList"

const logo = require('../../assets/logo.svg').default
const upArrow = require('../../assets/arrow-black.svg').default
const instagram = require('../../assets/instagram.svg').default
const youtube = require('../../assets/youtube.svg').default
const twitter = require('../../assets/twitter.svg').default
const email = require('../../assets/email.svg').default

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-20 pb-16">
      <div className="grid max-w-7xl">
        <div className="flex justify-between pb-14">
          <img src={logo} alt="Logo" width={276} height={43}/>
          <div>
            <button type="button" className="up-arrow">
              <img src={upArrow} alt="Uma seta virada para cima" width={23} height={23}/>
            </button>
          </div>
        </div>
        <div className="middle-footer grid">
          <div className="middle-left-footer pr-16 pt-16 pb-20">
            <p className="text-3xl text-white font-medium w-80">Fique por dentro de <span className="logo-color">todas as novidades</span></p>
            <div className="flex mt-8">
              <input type="text" placeholder="nft@rocketseat.com.br" className="input-footer text-xl p-5 w-72"/>
              <button type="button" className="font-bold bg-white text-black py-5 pl-5 pr-8">Enviar</button>
            </div>
          </div>
          <div className="flex gap-32 items-center justify-center">
            <FooterList title='Empresa' link1='Sobre' link2='Serviços' link3='Time' link4='Carreira' />
            <FooterList title='Mapa' link1='Galeira' link2='Populares' link3='Vendas' link4='Contato' />
            <FooterList title='Links' link1='FAQs' link2='Termos' link3='Politica' link4='Ajuda' />
          </div>
        </div>
        <div className="flex items-center justify-between pt-16">
          <p className="text-xl">www.rocketseat.com.br</p>
          <div className="flex gap-12 ">
            <img src={instagram} alt="Logo Instagram" />
            <img src={youtube} alt="Logo Youtube" />
            <img src={twitter} alt="Logo Twitter" />
            <img src={email} alt="Email" />
          </div>
        </div>
      </div>
    </footer>
  )
}