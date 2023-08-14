interface LinkList {
  title: String,
  link1: String,
  link2: String,
  link3: String,
  link4: String
}

export default function FooterList(props: LinkList) {
  return (
    <nav>
      <ul className="flex flex-col gap-2 lg:text-xl md:text-base sm:text-xl text-base">
        <li className="text-white font-bold">{props.title}</li>
        <li><a href="/" className="focus:text-white hover:text-white duration-300 ease-out">{props.link1}</a></li>
        <li><a href="/" className="focus:text-white hover:text-white duration-300 ease-out">{props.link2}</a></li>
        <li><a href="/" className="focus:text-white hover:text-white duration-300 ease-out">{props.link3}</a></li>
        <li><a href="/" className="focus:text-white hover:text-white duration-300 ease-out">{props.link4}</a></li>
      </ul>
    </nav>
  )
}