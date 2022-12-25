import Instagram from "../svgs/socialMediaLogos/Instagram"
import Mail from "../svgs/socialMediaLogos/Mail"
import Twitter from "../svgs/socialMediaLogos/Twitter"
import Youtube from "../svgs/socialMediaLogos/Youtube"
import ArrowBlack from "../svgs/arrows/ArrowBlack"

import FooterList from "./FooterList"
import RocketBlogLogo from "../svgs/logos/RocketBlogLogo"

function toTop() {
  window.scrollBy(0, -document.body.scrollHeight)
  focusFirstAnchor()
}

function focusFirstAnchor() {
  document.getElementById('header-logo')?.focus()
}

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-20 pb-16 bg-neutral-800 text-neutral-600">
      <div className="grid max-w-7xl">
        <div className="flex justify-between pb-14">
          <RocketBlogLogo width={276} height={43}/>
          <div>
            <button type="button" className="up-arrow bg-rose-500" onClick={toTop}>
              <ArrowBlack width={23} height={23} />
            </button>
          </div>
        </div>
        <div className="middle-footer grid border-y border-y-neutral-600">
          <div className="border-r border-r-neutral-600 pr-16 pt-16 pb-20">
            <p className="text-3xl text-white font-medium w-80">Fique por dentro de <span className="text-rose-500">todas as novidades</span></p>
            <div className="flex mt-8">
              <input type="email" placeholder="nft@rocketseat.com.br" className="bg-neutral-900 text-white text-xl p-5 w-72 placeholder:text-neutral-500 outline-none focus:outline-white"/>
              <button type="button" className="font-bold bg-white text-black text-xl py-5 pl-5 pr-5">Enviar</button>
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