import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";


const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
          className="card1"
            Icon={MdDesignServices}
            title={"Responsive Web Design"}
            disc={`As a frontend developer, I specialize in creating visually appealing and user-friendly websites with a focus on responsive web design.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
          className="card1"
            Icon={FiCodesandbox}
            title={"Interactive User Interfaces"}
            disc={`Bringing interactivity to the forefront, I design and develop engaging user interfaces that leave a lasting impression on visitors.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
          className="card1"
            Icon={CgWebsite}
            title={"Creative UI/UX Design"}
            disc={`As a frontend developer, I'm passionate about creating captivating UI/UX designs that merge aesthetics with functionality.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }

`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
 
`;
