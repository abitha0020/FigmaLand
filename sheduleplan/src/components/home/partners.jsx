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
                <img src="src/assets/logos_apple-app-store.png" alt="APPLE APP STORE" />
                <img src="src/assets/logos_apiary.png" alt="APIARY" />
                <img src="src/assets/logos_android-icon.png" alt="ANDROID" />
                <img src="src/assets/logos_basecamp.png" alt="BASECAMP" />
                <img src="src/assets/logos_airbnb.png" alt="AIRBNB" />
                <img src="src/assets/logos_ibm.png" alt="IBM" />
            </div>
            <div className="mt-20 mx-auto w-[160px] h-[52px]">
                <button className="w-[160px] h-[52px] border border-white text-white font-medium text-base tracking-[0.2px] ">All Partners</button>
            </div>
        </div>
    );
}