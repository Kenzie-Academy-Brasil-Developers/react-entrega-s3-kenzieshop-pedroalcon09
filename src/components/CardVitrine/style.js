import styled from "styled-components";

const StyledCardVitrine = styled.div`
  width: 250px;
  height: fit-content;
  margin: 15px 5px;
  background-color: rgb(230, 230, 230);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .img-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    white-space: nowrap;
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
  }

  span {
    background-color: var(--grey3);
    color: white;
    font-weight: 900;
    padding: 5px;
    border-radius: 7px;
    margin: 10px 0px;
  }

  button {
    background-color: var(--purple3);
    color: white;
    font-family: "Nunito", sans-serif;
    width: 175px;
    height: 30px;
    border-radius: 7px;
    font-size: 15px;
    border: 3px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  button:hover {
    transition: 0.5s;
    font-weight: 900;
    border-color: grey;
    background-color: var(--purple2);
  }

  @media (min-width: 667px) {
  }
`;

export default StyledCardVitrine;
