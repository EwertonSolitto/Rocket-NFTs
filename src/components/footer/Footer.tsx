import Instagram from "../socialMediaLogos/Instagram"
import Mail from "../socialMediaLogos/Mail"
import Twitter from "../socialMediaLogos/Twitter"
import Youtube from "../socialMediaLogos/Youtube"

import FooterList from "./FooterList"

const logo = require('../../assets/logo.svg').default

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-20 pb-16 bg-neutral-800 text-neutral-600">
      <div className="grid max-w-7xl">
        <div className="flex justify-between pb-14">
          <img src={logo} alt="Logo" width={276} height={43}/>
          <div>
            <button type="button" className="up-arrow bg-rose-500 hover:bg-white focus:bg-white ease-out duration-300">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.44174 6.70327L9.79825 22.676L13.1308 22.6016L12.7742 6.62889L20.0871 13.6224L22.3906 11.2138L10.9656 0.287669L0.0395174 11.7127L2.44818 14.0162L9.44174 6.70327Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="middle-footer grid border-y border-y-neutral-600">
          <div className="border-r border-r-neutral-600 pr-16 pt-16 pb-20">
            <p className="text-3xl text-white font-medium w-80">Fique por dentro de <span className="text-rose-500">todas as novidades</span></p>
            <div className="flex mt-8">
              <input type="text" placeholder="nft@rocketseat.com.br" className="bg-neutral-900 text-white text-xl p-5 w-72 placeholder:text-neutral-500 outline-none focus:outline-white"/>
              <button type="button" className="font-bold bg-white text-black text-xl py-5 pl-5 pr-5 hover:bg-neutral-900 hover:text-white focus:bg-neutral-900 focus:text-white duration-300 ease-out">Enviar</button>
            </div>
          </div>
          <div className="flex gap-32 items-center justify-center">
            <FooterList title='Empresa' link1='Sobre' link2='Serviços' link3='Time' link4='Carreira' />
            <FooterList title='Mapa' link1='Galeira' link2='Populares' link3='Vendas' link4='Contato' />
            <FooterList title='Links' link1='FAQs' link2='Termos' link3='Politica' link4='Ajuda' />
          </div>
        </div>
        <div className="flex items-center justify-between pt-16">
          <a href="https://www.rocketseat.com.br" className="text-xl hover:text-white focus:text-white duration-300 ease-out">www.rocketseat.com.br</a>
          <div className="social-media-logos flex gap-12 ">
            <a href="/" className="footer-social-media-logo">
              <Instagram />
            </a>
            <a href="/" className="footer-social-media-logo">
              <Youtube />
            </a>
            <a href="/" className="footer-social-media-logo">
              <Twitter />
            </a>
            <a href="/" className="footer-social-media-logo">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}