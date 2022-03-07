import styled from "styled-components";

const StyledCardCart = styled.div`
  width: 250px;
  height: fit-content;
  margin: 15px 5px;
  background-color: rgb(230, 230, 230);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    width: 75px;
    height: 33px;
    margin-left: 10px;
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
    color: black;
    background-color: var(--purple2);
  }

  @media (min-width: 667px) {
    width: 400px;
    flex-direction: row;
    align-items: center;

    .info-container {
      flex-direction: column;
    }

    .info-container button {
      margin-left: 0px;
    }
  }

  @media (min-width: 1024px) {
    width: 600px;
    justify-content: space-around;

    .img-container {
      width: 30%;
    }
  }
`;

export default StyledCardCart;
