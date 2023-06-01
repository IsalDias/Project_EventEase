import React from "react";
import "./services.css";
import Services_photo from "../../../Components/Assests/Services_photo.png";
import SearchBar from "../../../Components/Search/Search";

const Services = () => {
  return (
    <div className="full">
      <div
        className="first_part"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${Services_photo})`,
        }}
      >
        <p className="heading">Discover the Best Services Near You</p>
        <p className="under_heading">Find service providers for any services</p>
      
      <div className="searchbar">
        <SearchBar/>
      </div>
      </div>
    </div>
  );
};

export default Services;
