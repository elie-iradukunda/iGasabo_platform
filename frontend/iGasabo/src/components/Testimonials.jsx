import React from "react"
import raise from "../assets/raise.avif"
import stay from "../assets/stay.avif"
import connect from "../assets/connect.avif"
import join from "../assets/join.avif"
import where from "../assets/where.avif"
import "../assets/styles/Testimonial.css";
import CommunityFAQ from "./FAQ"
const Testimonials=()=>{
return(
<>


<div className="totalpage">

    <div className="parts">
    <div className="part1">
        <img src={raise} alt="" />
        <h2>Raise your voice,  <br />
        shape your city</h2>
        <p>
            Share your thoughts,  <br />
            concerns, or ideas with your neighbors. <br />
             Every post helps build  <br />
             a more connected community.
        </p>
    </div>


      <div className="part1">
        <img src={stay} alt="" />
        <h2>Stay in the  <br />
        loop locally</h2>
        <p>
      Discover what’s <br />
       new in your area—events, <br />
        updates, and projects  <br />
        that matter to you.
        </p>
    </div>


     <div className="part1">
        <img src={connect} alt="" />
        <h2>Connect with  <br />
        local leaders</h2>
        <p>
     Reach out for support <br />
      or guidance from officials.  <br />
      Your needs are heard  <br />
      and addressed openly.
        </p>
    </div>


     <div className="part1">
        <img src={join} alt="" />
        <h2>Connect with  <br />
        local leaders</h2>
        <p>
     Reach out for support <br />
      or guidance from officials.  <br />
      Your needs are heard  <br />
      and addressed openly.
        </p>
    </div>


</div>


<div className="part2">
<img src={where} alt="" />
<h2>
    Where community <br />
     voices come together
</h2>

<p>
    Browse recent posts,  <br />
    find fresh ideas, and see how leaders <br />
     are responding to your community’s needs.
</p>
</div>


<div className="part3">
    <div className="pa">
    <h2>Report a concern</h2>
    <p>
        Spot an issue  <br />
        in your neighborhood?  <br />
        Let us know so it can be  <br />
        resolved quickly  <br />
        and transparently.
    </p>
    </div>


    <div className="pa">
    <h2>Share an idea</h2>
    <p>
        Suggest ways to <br />
         improve your area—every idea, <br />
          big or small,  <br />
          makes a difference.
    </p>
    </div>

    <div className="pa">
    <h2>Ask the community</h2>
    <p>
      Have questions  <br />
      about local services or  <br />
      policies? Get answers from <br />
       neighbors and leaders.
    </p>
    </div>

<div className="pa">
    <h2>Lend a hand</h2>
    <p>
      Volunteer your  <br />
      time or skills to support <br />
       local projects and  <br />
       help your neighbors.
    </p>
    </div>



    <div className="pa">
    <h2>Celebrate together</h2>
    <p>
   Share uplifting stories,  <br />
   community wins,  <br />
   and positive changes  <br />
   happening around you.
    </p>
    </div>


</div>
</div>
<CommunityFAQ/>
</>

)
}

export default Testimonials