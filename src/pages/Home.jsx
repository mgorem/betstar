import React from "react";
import styled from "styled-components"
import CountdownTimer from "../components/CountdownTimer"
import "../App.css";
import Topbar from "../components/Topbar";
import { smaller } from '../responsive'

const BottomBar = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    /* border: 1px solid #fff; */
    margin-top: 50px;
`
const ImageSection = styled.div`
    width: 59%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* ${smaller({alignItems: "flex-end",
                
    })} */
`
const LeftImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const RightImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Home = () => {
  const DAYS_TO_EXPIRY_MS = 3 * 24 * 60 * 60 * 1000; // Enter time for expiry
  const CURRENT_IN_MS = new Date().getTime(); // fetches current time

  const dateTimeAfterSelectedDays = CURRENT_IN_MS + DAYS_TO_EXPIRY_MS;

  return (
    <div className="home">
      <Topbar />
      <BottomBar>
        <p className="shinda-name"><i>Shinda</i></p>
        <p><span className="jackpot-banner">JACKPOT YETU</span></p>
        <CountdownTimer targetDate={dateTimeAfterSelectedDays} />
        <ImageSection>
            <LeftImage>
                <img src="images/jackpot.png" className="jackpot-image" alt="jackpot" />
                <span className="banner-info">WEKELEA JACKPOT</span>
            </LeftImage>
            <RightImage>
                <img src="images/betstar-asset1.png" className="banner-image" alt="betstar-asset" />
                <span className="banner-info" style={{color: "#ff7f00"}}>PLAY CRUSHGAME</span>
            </RightImage>
        </ImageSection>
      </BottomBar>
    </div>
  );
}

export default Home