import { BsGridFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="fixed h-screen w-[300px] pl-10 pt-10 left-0 bg-black text-white">
      <div className="text-sm">Menu</div>
      <Link
        to="/"
        className="flex justify-start text-xl hover:opacity-80 cursor-pointer items-center my-5"
      >
        <BsGridFill />
        <div className="uppercase pl-5">Home</div>
      </Link>
      <Link
        to="/driver_view"
        className="flex justify-start text-xl hover:opacity-80 cursor-pointer items-center my-5"
      >
        <IoPersonSharp />
        <div className="uppercase pl-5">Driver</div>
      </Link>

      <Link
        to="/bus_view"
        className="flex justify-start text-xl hover:opacity-80 cursor-pointer items-center my-5"
      >
        <FaBus />
        <div className="uppercase pl-5">Bus</div>
      </Link>
      <Link
        to="/bus_view"
        className="flex justify-start text-xl hover:opacity-80 cursor-pointer items-center my-5"
      >
        <FaRoad />
        <div className="uppercase pl-5">Trip</div>
      </Link>
      <div className="text-sm">Personal</div>
      <Link
        to="/bus_view"
        className="flex justify-start text-xl hover:opacity-80 cursor-pointer items-center my-5"
      >
        <CgProfile />
        <div className="uppercase pl-5">Profile</div>
      </Link>
      <Link
        to="/bus_view"
        className="flex justify-start text-xl hover:opacity-80 cursor-pointer items-center my-5"
      >
        <IoSettings />
        <div className="uppercase pl-5">Settings</div>
      </Link>
      <div className="text-sm">Support</div>
      <Link
        to="/bus_view"
        className="flex justify-start text-xl hover:opacity-80 cursor-pointer items-center my-5"
      >
        <FaRegQuestionCircle />
        <div className="uppercase pl-5">Help & Support</div>
      </Link>
    </div>
  );
};

export default Sidebar;
