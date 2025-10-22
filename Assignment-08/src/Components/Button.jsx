import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <div className="inner">
          <span className="text">Download Now</span>
        </div>
      </button>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  .inner {
    position: relative;
    inset: 0px;
    padding: 1em;
    border-radius: 4px;
  background:red;
    overflow: hidden;
    transition: inherit;
  }

  .inner::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(-65deg, #0000 40%, #fff7 50%, #0000 70%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: thing 3s ease infinite;
  }

  @keyframes thing {
    0% {
      background-position: 130%;
      opacity: 1;
    }

    to {
      background-position: -166%;
      opacity: 0;
    }
  }

  .text {
    position: relative;
    z-index: 1;
    color: white;
    font-weight: 550;
    transition: inherit;
  }
`;

export default Button;
