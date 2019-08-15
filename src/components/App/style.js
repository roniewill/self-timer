import styled from "styled-components";

const BoxTimer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageTimer = styled.img`
  width: 500px;
  height: 510px;
  margin-top: 50px;
`;

const ShowTimer = styled.span`
  font-size: 230px;
  margin-top: -360px;
`;

const BoxButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7em;
`;

const Button = styled.button`
  font-size: 2em;
  margin: 0.1em;
  padding: 0.25em 1em;
  border: 2px solid #ece9ea;
  border-radius: 5px;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:focus {
    outline: none;
    background-color: #ece9ea;
  }
`;

export { BoxTimer, ImageTimer, ShowTimer, BoxButtons, Button };
