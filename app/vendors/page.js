import VendorCard from "./components/VendorCard";
import SuhbaClubPhoto from "../../public/suhba-logo.png";
import MYNLogo from "../../public/mynlogo.png";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black font-semibold text-2xl mb-4 text-center max-w-[500px]">Click on a vendor to find out more about them and see a list of activities</h1>
      <div className="flex flex-col max-md:space-y-10 md:flex-row md:space-x-10 mt-10">
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