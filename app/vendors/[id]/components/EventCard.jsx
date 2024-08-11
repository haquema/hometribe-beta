import Image from "next/image";
import testImage from "../../../../public/profile-stock-1.jpg"
import EventModal from "@/app/item/EventModal";

const EventCard = ({classNames, eventInfo}) => {
  return (
    <div className={classNames + " space-y-3 border rounded-lg bg-red-100"}>
      <Image className="rounded-t-lg" src={testImage} alt="image of the activity" width={320} height={"auto"}/>
      <div className="px-4">
        <p className="font-semibold text-base mb-1">{eventInfo.name}</p>
        <p className="text-xs line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, culpa soluta dolorem fuga cupiditate nulla excepturi dolore. Dolore laborum impedit sequi minus dolores, officiis dolorem voluptatum perferendis doloribus omnis placeat!</p>
        <EventModal eventInfo={eventInfo} />
      </div>
    </div>
  )
}

export default EventCard;