import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const NavBar = () => {
  return (
    <nav className="bg-slate-600 flex justify-between items-center py-3 fixed top-0 w-full text-white shadow h-14 z-50">
      <div className="logo w-1/6">
        <h1 className="heading">YASH PUBLISHERS</h1>
      </div>
      <div className="w-3/6 flex justify-between">
        <Link to="/">HOME</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/products">PRODUCT</Link>
        <Link to="/gallery">GALLERY</Link>
      </div>
      <div className="searchBar w-2/6 h-8 flex justify-center ">
        <div className="shadow flex w-3/4 border-red-100 h-3/4 bg-white/[0.4] rounded border">
          <AiOutlineSearch className=" h-auto ml-1" />
          <input type="text" className="inline bg-transparent w-full " />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
