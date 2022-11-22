const banner = require('../assets/banner.png')

export default function Content() {
  return (
    <div className="flex flex-col items-center background-dark w-full text-white">
      <section className="grid info-section max-w-8xl">
        <div className="flex flex-col items-center justify-center gap-16 gray-right-border">
          <div>
            <h2 className="text-5xl font-semibold text-center pt-1">10K+</h2>
            <p className="text-xl font-semibold text-center text-gray-subtitle">Artes</p>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-center pt-1">200+</h2>
            <p className="text-xl font-semibold text-center text-gray-subtitle">Vendas</p>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-center pt-1">20</h2>
            <p className="text-xl font-semibold text-center text-gray-subtitle">Artistas</p>
          </div>
        </div>
        <div className="pt-16">
          <div className="flex gap-32 pl-16 pb-16">
            <div>
              <p className="pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className="logo-color">potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
              <span className="underline">Lorem ipsum</span>
            </div>
            <div>
              <p className="pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className="logo-color">potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
              <span className="underline">Lorem ipsum</span>
            </div>
          </div>
          <div><img src={banner} alt="Banner de um homem usando um óculos diferente" /></div>
        </div>
      </section>
    </div>
  )
}