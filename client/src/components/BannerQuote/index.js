import React from "react";
// import Banner from "react-js-banner";

function BannerQuote() {
  var quotesArray = [
    "The greatest threat to our planet is the belief that someone else will save it.",
    "Often when you think you’re at the end of something, you’re at the beginning of something else.",
    "There is no such thing as ‘away’. When we throw anything away it must go somewhere.",
    "When you put the whole picture together, recycling is the right thing to do.",
    "We cannot solve our problems with the same thinking we used when we created them.",
    "We do not inherit the Earth from our ancestors; we borrow it from our children.",
    "We never know the worth of water till the well is dry.",
    "Recycling, packaging, businesses are changing all of those things because that’s what consumers want.",
    "If it can’t be reduced, reused, repaired, rebuilt, refurbished, refinished, resold, recycled, or composted, then it should be restricted, designed or removed from production.",
    "We are living on this planet as if we had another one to go to.",
    "At its core, the issue of a clean environment is a matter of public health.",
    "Listen up, you couch potatoes: each recycled beer can saves enough electricity to run a television for three hours. ",
  ];

  var randQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  console.log(randQuote);
  return (
  
      <div>
        <div style={{textAlign: "center", backgroundColor: "#EAEAEA" ,paddingTop: "10px", paddingBottom: "10px",fontSize: "20px"}} >{randQuote}</div>
      </div>
  
  );
}

export default BannerQuote;
