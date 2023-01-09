import React from "react";
import "./Body.css";
import Emailtype from "./Emailtype";
import EmaiListSetting from "./EmaiListSetting";
import Emailbody from "./Emailbody";
import { emailData } from "../../JsonHelper";
function Body() {
  return (
    <div className="emailbodydiv">
      <EmaiListSetting />
      <Emailtype />
      <div>
        {console.log("email data", emailData)}
        {emailData.map((item) => (
          <Emailbody
            name={item.senderName}
            subject={item.subject}
            message={item.description}
            time={item.createdDate}
          />
        ))}
        
      </div>
    </div>
  );
}

export default Body;
