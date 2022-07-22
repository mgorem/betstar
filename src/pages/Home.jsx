import React from "react";
import styled from "styled-components"
import CountdownTimer from "../components/CountdownTimer"
import "../App.css";
import Topbar from "../components/Topbar";
import { midMini, mini, smaller, superMini } from '../responsive'

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
    ${smaller({overflow: "visible",
                
    })}
`
const ImageSection = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SingleImage1 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    ${mini({paddingLeft: "60px",
                
    })}
    ${superMini({paddingLeft: "100px",
                 width: "100px",
    })}
`
const SingleImage2 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${superMini({width: "100px",
                 alignItems: "flex-start",
                 paddingRight: "",
    })}
    /* ${midMini({fontSize: "8px",
               
    })} */
`
const Image1 = styled.img`
    /* ${mini({backgroundColor: "blue",
                
    })} */
`
const Image2 = styled.img`
    /* ${mini({backgroundColor: "blue",
                
    })} */
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
            <SingleImage1>
                <Image1 src="images/jackpot.png" className="jackpot-image" style={{width: "200px", height: "150px"}} alt="jackpot" />
                <span className="banner-info" style={{paddingLeft: "25px"}}>WEKELEA JACKPOT</span>
            </SingleImage1>
            <SingleImage2>
                <Image2 src="images/betstar-asset1.png" className="banner-image" style={{width: "200px", height: "150px", marginRight: "50px"}} alt="betstar-asset" />
                <span className="banner-info" style={{color: "#ff7f00"}}>PLAY CRUSHGAME</span>
            </SingleImage2>
        </ImageSection>
      </BottomBar>
    </div>
  );
}

export default Home