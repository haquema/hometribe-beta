const AboutCard = ({classNames}) => {
  return (
    <div className={classNames +" p-2 flex flex-col items-left"}>
      <p className="text-lg font-semibold">About</p>
      <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias tenetur quae voluptates consequatur autem modi quos tempora fuga eius quod tempore a, consequuntur, asperiores culpa iusto soluta ab placeat!</p>
    </div>
  )
}

export default AboutCard;