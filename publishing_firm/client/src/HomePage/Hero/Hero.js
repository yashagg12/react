import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')] w-100 min-h-screen bg-cover hero text-white flex items-center">
      <div className="z-1 relative flex flex-col p-20 mt-24 w-4/6 justify-center mx-auto">
        <h1 className="text-6xl mb-10 font-bold">Yash Publishing Company</h1>
        <p className="text-center text-2xl mb-10">
        Whether you want to be a doctor, an engineer, a bureaucrat or want to join government to help them run smoothly or simply want to excel in your school studies, we have got you covered.
        </p>
        {/* <Link to="/products">
          <button className="default_button relative hover:border text-xl w-80">
            Explore our Products
            <BsFillArrowRightCircleFill className="right-5 absolute" />
          </button>
        </Link> */}
      </div>
    </div>
  );
};
export default Hero;
