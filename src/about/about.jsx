import Navbar from "../Navbar/navbar";
import Image from'../assets/Images/about/Main_Image.png'
function about(){
    return(
        <div className="h-screen bg-gradient-to-b from-softTop via-softTop to-softBottom">
         <Navbar/>
         <div className="flex flex-col md:flex-row items-center justify-evenly ">
            <div className="item-1 mt-[-76px]">
            <p className="text-[#245FB1] text-[30px] ">About</p>
            <p className=" text-[30px] mb-4">Engaging enough for the <br/>general public to justify reporting</p>
            <p className="text-[18px]">Please register to be a part of the website.</p>
         </div>
         <div className="items-2">
            <img src={Image} alt="News Image" className=" max-w-[525px]"/>
         </div>
         </div>
         </div>
    )
}
export default about;