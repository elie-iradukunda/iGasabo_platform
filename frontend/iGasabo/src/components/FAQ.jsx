import React from "react";
import "../assets/styles/faq.css"; 

const CommunityFAQ = () => {
  return (
    <div className="faq-section">
      <h1>Community questions, real answers</h1>
      <h3>Ask. Share. Connect. Get support.</h3>
      <p className="intro">
        Wondering how to make your voice count? Here’s how you can join the conversation,
        connect with neighbors, and work together for positive change.
      </p>

      <div className="faq-item">
        <h4>Who can view my posts?</h4>
        <p>
          Posts are visible to everyone registered in your area. This openness helps spark
          honest conversations and brings neighbors together to support each other.
        </p>
      </div>

      <div className="faq-item">
        <h4>How do I reach local leaders?</h4>
        <p>
          Share your thoughts or concerns, and local leaders will be notified. They’ll
          respond directly, so you always know who’s listening and ready to help.
        </p>
      </div>

      <div className="faq-item">
        <h4>Is posting anonymous?</h4>
        <p>
          You’ll need to register, but your posts are always linked to your profile.
          This keeps things open and respectful, building trust in every conversation.
        </p>
      </div>

      <div className="faq-item">
        <h4>What if no one responds?</h4>
        <p>
          If you don’t hear back right away, others can support your post. The more voices
          join in, the more likely leaders are to take action on what matters most.
        </p>
      </div>
    </div>
  );
};

export default CommunityFAQ;
