import styled from "styled-components";

export const StyledCartList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 120px;
    height: 120px;
  }

  h1 {
    margin: 30px;
    text-align: center;
  }

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .disc-icon {
    font-size: 35px;
    width: 35px;
    height: 34px;
    border-radius: 100%;
  }

  @media (prefers-reduced-motion: no-preference) {
    .disc-icon {
      animation: disc-spin infinite 0.7s;
    }
  }

  @keyframes disc-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;

    ul {
      width: 60vw;
    }

    h1 {
      font-size: 40px;
      margin: 30px;
      text-align: center;
    }

    .disc-icon {
      font-size: 55px;
      width: 55px;
      height: 54px;
      border-radius: 100%;
    }
  }
`;

export default StyledCartList;
