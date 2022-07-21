import React from "react";
import styled from "styled-components"
import CountdownTimer from "../components/CountdownTimer"
import "../App.css";
import Topbar from "../components/Topbar";

const BottomBar = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    border: 1px solid #fff;
    margin-top: 50px;
`
const ImageSection = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
`
// const LeftImage = styled.div`
//     width: 90%;
//     height: 70%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: green;
// `
// const RightImage = styled.div`
//     width: 90%;
//     height: 70%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: orange;
// `
const Home = () => {
  const DAYS_TO_EXPIRY_MS = 3 * 24 * 60 * 60 * 1000; // Enter time for expiry
  const CURRENT_IN_MS = new Date().getTime(); // fetches current time

  const dateTimeAfterSelectedDays = CURRENT_IN_MS + DAYS_TO_EXPIRY_MS;

  return (
    <div className="home">
      <Topbar />
      <BottomBar>
        <p className="shinda">Shinda</p>
        <h1 style={{marginTop: "5px"}}>JACKPOT YETU</h1>
        <CountdownTimer targetDate={dateTimeAfterSelectedDays} />
        <ImageSection>
        {/* <LeftImage> */}
            <img src="images/jackpot.png" style={{width: "300px", height: "200px"}} alt="jackpot" />
        {/* </LeftImage> */}
        {/* <RightImage> */}
            <img src="images/betstar-asset1.png" alt="betstar-asset" />
        {/* </RightImage> */}
        </ImageSection>
      </BottomBar>
    </div>
  );
}

export default Home