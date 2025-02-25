import React from "react";
import StackBox from "../components/StackBox";


function Home() {
    
    return(
        <div className="container mx-auto p-10 flex flex-col items-center text-center">
            <h1 className="font-DancingScript text-white text-center text-3xl p-10 underline">Ma  stack techniques </h1>
            <StackBox/>
        </div>
    )
}
export default Home