import React from "react"
import imgs from "../assets/imgs/img1.png"

const StackBox = ({logo}) => {
    console.log(logo)
    return (
        <div className="flex flex-wrap justify-center space-x-4">
            {logo.map((logo, index)=>(
                <img key={index} src={logo.src} alt={logo.alt} className="w-12 h-12 m-2"/>
            ))}
        </div>
    );
};
export default StackBox;