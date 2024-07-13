import Featuresimage from "./Features.png";
function Features(){
    return(
        <div className="bg-[#181818] py-10">
            <div className="container py-5">
                <h2 className="text-white text-center font-normal text-[52px] leading-[62px] tracking-[0.2px]">FEATURES</h2>
            </div>
            <div className="w-[600px] pt-5 h-[60px] mx-auto px-5 text-center text-white font-normal text-xl tracking-[0.2px]">
                <h3>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</h3>
            </div>
            <div className="py-20 w-[80%] h-[800px] mx-auto">
                <div className="column-8">
                    <img src={Featuresimage} alt="Features Image"className="" />
                </div>
                <div className="column-4">
                    <div></div>

                </div>
            </div>
        </div>
    );
}
export default Features;