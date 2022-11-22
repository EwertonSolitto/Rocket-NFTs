interface LinkList {
  title: String,
  link1: String,
  link2: String,
  link3: String,
  link4: String
}

export default function FooterList(props: LinkList) {
  return (
    <ul className="flex flex-col gap-2 text-xl">
      <li className="text-white font-bold">{props.title}</li>
      <li><a href="/">{props.link1}</a></li>
      <li><a href="/">{props.link2}</a></li>
      <li><a href="/">{props.link3}</a></li>
      <li><a href="/">{props.link4}</a></li>
    </ul>
  )
}