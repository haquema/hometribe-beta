import VendorCard from "./components/VendorCard";
import SuhbaClubPhoto from "../../public/suhbadp.png";
import MYNLogo from "../../public/mynlogo.png";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black font-semibold text-2xl m-10 text-center">Click on a vendor to find out more about them and see a list of activities</h1>
      <div className="flex space-x-6 mt-20">
        <VendorCard
          photo={SuhbaClubPhoto}
          bgColor="white"
          name="Suhba Club"
          location="Newham, London"
          rating="4.35"
          id="1"
        />
        <VendorCard
          photo={MYNLogo}
          bgColor="white"
          name="Muslim Youth Network"
          location="Whitechapel, London"
          rating="4.92"
          id="2"
        />
      </div>
    </div>
  )
}

export default Page;