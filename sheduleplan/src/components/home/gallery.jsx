export default function Gallery() {
    return(
        <div className="p-10">
            <div className="container py-5 mt-20">
                <h2 className="text-white text-center font-normal text-[52px] leading-[62px] tracking-[0.2px]">Gallery</h2>
            </div>
            <div className="w-[600px] pt-5 h-[80px] mx-auto px-5 text-center text-white font-normal text-xl tracking-[0.2px]">
                <h3>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</h3>
            </div>
            <div className="mx-auto  mt-14 w-[1000px] h-[285px] flex place-content-between">
                <img src="src/assets/galleryimage.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
                <img src="src/assets/tab.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
                <img src="src/assets/people.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
                <img src="src/assets/tv.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
            </div>
            <div className="mx-auto mt-8 w-[1090px] h-[285px] flex place-content-between">
                <img src="src/assets/coding.png" alt="" className="w-[395px] h-[285px] rounded-[12px]" />
                <img src="src/assets/laptop.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
                <img src="src/assets/camera.png" alt="" className="w-[401px] h-[285px] rounded-[12px]"/>
            </div>
            <div className="mt-10 mx-auto w-[160px] h-[52px]">
                <button className="w-[160px] h-[52px] border border-white text-white font-medium text-base tracking-[0.2px] ">See More</button>
            </div>
        </div>
    );
}