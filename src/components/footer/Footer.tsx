import Instagram from "../svgs/socialMediaLogos/Instagram"
import Mail from "../svgs/socialMediaLogos/Mail"
import Twitter from "../svgs/socialMediaLogos/Twitter"
import Youtube from "../svgs/socialMediaLogos/Youtube"
import ArrowBlack from "../svgs/arrows/ArrowBlack"

import FooterList from "./FooterList"
import RocketBlogLogo from "../svgs/logos/RocketBlogLogo"

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-20 pb-16 bg-neutral-800 text-neutral-600">
      <div className="grid md:px-0 px-3">
        <div className="flex justify-between gap-6 items-center pb-14">
          <RocketBlogLogo width={276} height={43}/>
          <div>
            <button type="button" className="sm:p-7 p-2.5 bg-rose-500" onClick={toTop} aria-label="to Top button" aria-labelledby="botão para cima">
              <ArrowBlack width={23} height={23} />
            </button>
          </div>
        </div>
        <div className="middle-footer md:grid flex flex-col border-y border-y-neutral-600">
          <div className="md:border-r md:border-r-neutral-600 md:border-b-0 border-b border-b-neutral-600 md:pr-16 md:pt-16 md:pb-20 py-16 md:block flex flex-col items-center">
            <p className="lg:text-3xl text-2xl text-white font-medium md:w-80">Fique por dentro de <span className="text-rose-500">todas as novidades</span></p>
            <div className="flex mt-8 md:flex-row flex-col">
              <input type="email" placeholder="nft@rocketseat.com.br" className="bg-neutral-900 text-white md:text-xl text-base p-5 md:w-72 placeholder:text-neutral-500 outline-none focus:outline-white"/>
              <button type="button" className="font-bold bg-white text-black text-xl lg:py-5 lg:px-5 md:py-3 md:px-3 py-5">Enviar</button>
            </div>
          </div>
          <div className="flex xl:gap-32 lg:gap-16 gap-8 items-center justify-center md:py-0 py-8">
            <FooterList title='Empresa' link1='Sobre' link2='Serviços' link3='Time' link4='Carreira' />
            <FooterList title='Mapa' link1='Galeira' link2='Populares' link3='Vendas' link4='Contato' />
            <FooterList title='Links' link1='FAQs' link2='Termos' link3='Politica' link4='Ajuda' />
          </div>
        </div>
        <div className="flex sm:gap-12 gap-6 sm:flex-row flex-col items-center justify-between pt-16">
          <a href="https://www.rocketseat.com.br" className="text-xl hover:text-white focus:text-white duration-300 ease-out">www.rocketseat.com.br</a>
          <div className="social-media-logos flex gap-12 ">
            <a href="/" className="footer-social-media-logo" aria-labelledby="Ir ao Instagram">
              <Instagram />
            </a>
            <a href="/" className="footer-social-media-logo" aria-labelledby="Ir ao Youtube">
              <Youtube />
            </a>
            <a href="/" className="footer-social-media-logo" aria-labelledby="Ir ao Twitter">
              <Twitter />
            </a>
            <a href="/" className="footer-social-media-logo" aria-labelledby="Enviar email">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}