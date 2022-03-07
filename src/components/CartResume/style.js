import styled from "styled-components";

const StyledCartResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--grey4);
  height: 250px;
  width: 320px;
  border-radius: 8px;
  margin-bottom: 10px;

  h1 {
    width: 100%;
    text-align: center;
    padding: 8px;
    margin-bottom: 15px;
  }

  .info-prod {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  button {
    border: 2px solid transparent;
    font-size: 20px;
    background-color: var(--purple3);
    color: white;
    padding: 8px;
    margin: 10px;
    border-radius: 8px;
  }

  button:hover {
    transition: 0.5s;
    font-weight: 900;
    border-color: grey;
    box-shadow: 3px 3px grey;
  }

  section {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    margin-right: 50px;
  }
`;

export default StyledCartResume;
