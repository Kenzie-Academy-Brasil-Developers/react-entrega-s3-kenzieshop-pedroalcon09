import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid lightgrey;

  h1 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-left: 5px;
  }

  i {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }

  .header-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  button p {
    font-size: 13px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 3px;
    border: 2px solid transparent;
    padding: 5px;
    border-radius: 7px;
    width: 80px;
  }

  button:hover {
    transition: 0.5s;
    font-weight: 900;
    border-color: grey;
  }

  @media (min-width: 667px) {
    padding: 10px 20px;

    h1 {
      font-size: 25px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 30px;
    }

    .button-carrinho {
      width: 120px;
      font-size: 20px;
    }

    .button-entrar {
      width: 100px;
      font-size: 20px;
    }

    button p {
      font-size: 19px;
    }
  }
`;

export default StyledHeader;
