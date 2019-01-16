import React from "react";
import "./Card.css";

export function CardContainer({ children }) {
  return <div className="container-fluid my-auto" id="allMembers">
            <div className="row">{children}</div>
            </div>;
}

export function Card({ children }) {
    return <div className="card" id="memberCard" style={{width: 10 + 'rem'}}>
                <img src="https://via.placeholder.com/200.jpg/333333" className="card-img-top" alt="member photo"></img>
                {children}
            </div>
}