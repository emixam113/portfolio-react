import React from "react";
import StackBox from "../components/StackBox";


function Home() {
    const logo = [
        

    ];
    console.log(logo)

    return(
        <div>
            <h1 className="font-dancingScript text-white text-center text-3xl underline">Mes Stacks: </h1>

            <StackBox logo={logo}/>
        </div>
    )
}
export default Home