import logo from "../../src/assets/Images/dashboard/newlogo.NewsWorth.jpg"
import { useNavigate} from "react-router-dom";
function Logo(){
    const navigate = useNavigate();
    const handleNavigation = () => {
    navigate('/dashboard'); // Navigate to the selected path
  };
    return(
        <>
            <div className="fixed top-16 left-32 z-50">
                 <img src={logo} alt="" onClick={handleNavigation} className=" cursor-pointer w-[150px] h-[50px]" />
            </div>
        </>
    )
}

export default Logo;