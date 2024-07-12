import React from "react";
function Navbar(){
    return(
        <nav>
            <div >
                <div>
                    <img src="../assets/logofigmaland.png" alt="logo" />
                </div>
                <div>
                    <a href="#" class="text-grey-300">Home</a>
                    <a href="#">Product</a>
                    <a href="#">About</a>
                    <a href="#">Content</a>
                </div>
                <div>
                    <button></button>
                </div>    
            </div>
        </nav>
    );
}
export default Navbar;