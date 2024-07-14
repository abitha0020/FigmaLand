import appleappstore from "./images/logos_apple-app-store.png";
import apiary from "./images/logos_apiary.png";
import android from "./images/logos_android-icon.png";
import basecamp from "./images/logos_basecamp.png";
import airbnb from "./images/logos_airbnb.png";
import ibm from "./images/logos_ibm.png";
export default function Partners(){
    return(
        <div>
            <div className="container py-5 mt-20">
                <h2 className="text-white text-center font-normal text-[52px] leading-[62px] tracking-[0.2px]">Partners</h2>
            </div>
            <div className="w-[600px] pt-5 h-[80px] mx-auto px-5 text-center text-white font-normal text-xl tracking-[0.2px]">
                <h3>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</h3>
            </div>
            <div className="mx-auto mt-20 w-[840px] h-[70px] flex place-content-between">
                <img src={appleappstore} alt="APPLE APP STORE" />
                <img src={apiary} alt="APIARY" />
                <img src={android} alt="ANDROID" />
                <img src={basecamp} alt="BASECAMP" />
                <img src={airbnb} alt="AIRBNB" />
                <img src={ibm} alt="IBM" />
            </div>
        </div>
    );
}