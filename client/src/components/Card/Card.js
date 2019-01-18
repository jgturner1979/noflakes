import React from "react";
import "./Card.css";

export function CardContainer({ children }) {
  return <div className="container-fluid my-auto" id="allMembers">
                <div className="row">
                    <h3>Check Out these Members</h3>
                </div>
                <div className="row">
                    {children}
                </div>
        </div>;
}

export function Card({ children }) {
    return <div className="card" id="memberCard" style={{width: 10 + 'rem'}}>
                <img src="https://via.placeholder.com/200.jpg/333333" className="card-img-top" alt="ProfileImage"></img>
                {children}
            </div>
}