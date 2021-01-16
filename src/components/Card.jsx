import React from "react";
import web from "./img/s1.jpg";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card mt-4">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-little font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <NavLink to="" className="btn btn-primary">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
