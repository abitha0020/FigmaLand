import React from "react";
import Navbar from "../components/navbar";
import Homeintro from "../components/home/home-intro";
import Features from "../components/home/features";
import Contents from "../components/home/contents";
export default function Home(){
    return(
        <div className="bg-black">
            <Navbar />
            <Homeintro/>   
            <Features />
            <Contents />
        </div>
    );
    
}