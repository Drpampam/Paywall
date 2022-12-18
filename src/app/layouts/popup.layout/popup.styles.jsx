import styled from "styled-components";

export const PopupContainer = styled.div`
background-color: #E5E5E5;
height: 100%;

.verification-popup-container{
    height: 100vh;
    width:100%;
    padding-top: 7%;
    top:0;
    left:0;
    position:fixed;
    z-index:999;
    background-color: rgba(0,0,0,.2);
}

.verification-container{
    overflow:auto;
    box-shadow:5px 2px 50px rgba(0,0,0,.5);
    height: 80%;
    max-width: 50%;
    padding-top: 10%;
    padding-bottom: 10%;
    margin: auto auto auto auto ;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.vector-view{
    height: 72px;
    width: 90px;
    border-radius: 0px;
}
.notification-header{
    font-family: Manrope;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
}
.verification-container {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
  }
  .verification-container {
    animation-name: rubberBand;
  }
  
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }
  
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
  
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
  
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
  
    65% {
      transform: scale3d(.95, 1.05, 1);
    }
  
    75% {
      transform: scale3d(1.05, .95, 1);
    }
  
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  
  .rubberBand {
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand;
  }
`;