const AboutCard = ({classNames}) => {
  return (
    <div className={classNames +" px-2 flex flex-col items-left"}>
      <p className="text-lg font-semibold">About</p>
      <p className="text-sm ">As a muslim homeschool co-op based in London, Suhba Club offers a curated homeschooling schedule & curriculum through programmes and activities led by male and female teachers and mentors for infants, primary, and secondary age groups. Through personalised guidance, resources and a supportive community, Suhba Club facilitates a balanced and enriching homeschooling experience for every family.</p>
    </div>
  )
}

export default AboutCard;