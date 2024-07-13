import Featuresimage from "./images/Features.png";
import sourceoftruth from "./images/sourceoftruth.png"
function Features(){
    return(
        <div className="bg-[#181818] py-10">
            <div className="container py-5">
                <h2 className="text-white text-center font-normal text-[52px] leading-[62px] tracking-[0.2px]">FEATURES</h2>
            </div>
            <div className="w-[600px] pt-5 h-[60px] mx-auto px-5 text-center text-white font-normal text-xl tracking-[0.2px]">
                <h3>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</h3>
            </div>
            <div className="py-20 w-[80%] h-[800px] mx-auto flex">
                <div className="column-8">
                    <img src={Featuresimage} alt="Features Image"className="" />
                </div>
                <div className="column-4">
                    <div className="flex flex-col py-12 px-5">
                        <div>
                            <div className="w-[205px] h-[80px] flex gap-3">
                                <img src={sourceoftruth} alt="" className="w-[25px] h-[23px] my-auto" />
                                <h3 className="my-auto text-white font-medium text-xl tracking-[0.1px]">A single source of truth</h3>
                            </div>
                            <p className="pt-3 w-[270px] h-[120px] text-white font-normal text-base tracking-[0.2px]">When you add work to your Slate calendar we automatically calculate useful insights</p>
                        </div>
                        <div>
                            <div className="w-[205px] h-[80px] flex gap-3">
                                <img src={sourceoftruth} alt="" className="w-[25px] h-[23px] my-auto" />
                                <h3 className="my-auto text-white font-medium text-xl tracking-[0.1px]">Intuitive interface</h3>
                            </div>
                            <p className="pt-3 w-[270px] h-[120px] text-white font-normal text-base tracking-[0.2px]">When you add work to your Slate calendar we automatically calculate useful insights</p>
                        </div>
                        <div>
                            <div className="w-[205px] h-[80px] flex gap-3">
                                <img src={sourceoftruth} alt="" className="w-[25px] h-[23px] my-auto" />
                                <h3 className="my-auto text-white font-medium text-xl tracking-[0.1px]">Or with rules</h3>
                            </div>
                            <p className="pt-3 w-[270px] h-[120px] text-white font-normal text-base tracking-[0.2px]">When you add work to your Slate calendar we automatically calculate useful insights</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Features;