import React from "react";
import one from "../assets/1.svg"
import two from "../assets/connect.svg"
import three from "../assets/follow.svg"
import four from "../assets/join.svg"
import five from "../assets/message.svg"
import six from "../assets/sup.svg"
import "../assets/styles/Howitworks.css";



const HowitWorks=()=>{
    return(
        <>

        <div className="allContent">
            <div className="heading1">
                <h2>How it works</h2>
                Bridge the gap. Build trust.

            </div>
<div className="content2">
            <div className="howitworks">
                <img src={one} alt="" />
                <h2>Share your ideas</h2>

                <p>
                    Post your thoughts,<br />
                     concerns, or dreams for  <br />
                     your neighborhood.  <br />
                     Your voice helps shape what  <br />
                     comes next.
                </p>
            </div>



             <div className="howitworks">
                <img src={two} alt="" />
                <h2>Share your ideas</h2>

                <p>
                    Post your thoughts,<br />
                     concerns, or dreams for  <br />
                     your neighborhood.  <br />
                     Your voice helps shape what  <br />
                     comes next.
                </p>
            </div>



             <div className="howitworks">
                <img src={three} alt="" />
                <h2>Ask for support</h2>

                <p>
                  Need a hand or have an issue?  <br />
                  Reach out and let your <br />
                   community and leaders  <br />
                   know how they can help.
                </p>
            </div>




             <div className="howitworks">
                <img src={four} alt="" />
                <h2>View public updates</h2>

                <p>
                   See how leaders respond and what’s  <br />
                   happening in your area.  <br />
                   Everyone stays  <br />
                   in the loop, together.
                </p>
            </div>



             <div className="howitworks">
                <img src={five} alt="" />
                <h2>Connect with leaders</h2>

                <p>
                 Start open conversations <br />
                  with your local representatives. <br />
                   Build real relationships <br />
                    and spark change.
                </p>
            </div>




             <div className="howitworks">
                <img src={six} alt="" />
                <h2>Join the conversation</h2>

                <p>
                  Comment, offer ideas,  <br />
                  and support your neighbors.  <br />
                   Every interaction makes  <br />
                   your community stronger.
                </p>
            </div>


                
            </div>
        </div>
        </>
    )
}
export default HowitWorks;