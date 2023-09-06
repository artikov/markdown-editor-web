import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MarkdownDocsCard.css";

function MarkdownDocsCard(props) {
  return (
    <div>
      <div className={"basic-title rounded-top py-2" + props.className}>
        <h6 className={"text-center mb-0"}>{props.title}</h6>
      </div>
      <div className={"basic__formating_p rounded-bottom bg-light p-3"}>
        {props.children}
      </div>
    </div>
  );
}

export default MarkdownDocsCard;
