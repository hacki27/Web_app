import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import SliderCard from "./SliderCard";


const HeroSection = () => {
  return (
     <Wrapper>

    <div className="container grid grid-two-column">
    <div className="section-hero-data">
        <p className="hero-top-data">Manlex Foils</p>
        <h1 className="hero-heading">Leading Manufacturer Aluminium Foil</h1><br/>
        <p className="Hero-para">
          <b> Manlax Foils is your go-to solution for all you Needs!!!</b> </p>

          <br/><br/>
    <Button className="btn hireme-btn">
        <NavLink to="/contact"> Download Brochure</NavLink>
    </Button>
    </div>
    <SliderCard />

    {/* for image */}

    </div>

  </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 8rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 18rem;
}

.hero-top-data {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.helper};
}

.hero-heading {
  text-transform: uppercase;
  font-size: 6.rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}


.vFYSV {
  padding: 8rem 0px;
  background-color: red;
}




.slider-card {
  position: relative;
  width: 600px;
}

.slider-card img {
  display: block;
  width: 100%;
  height: auto;
}
`;

export default HeroSection;