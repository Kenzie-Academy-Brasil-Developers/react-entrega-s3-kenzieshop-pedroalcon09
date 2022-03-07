import styled from "styled-components";

const StyledVitrine = styled.div`
  ul {
    padding: 0px;
    margin: 0px;
    background: linear-gradient(to bottom, var(--grey2), var(--grey3));
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 667px) {
    ul {
      flex-direction: row;
      height: 700px;
      overflow-x: scroll;
    }
  }

  @media (min-width: 1024px) {
    ul {
      flex-direction: row;
      height: 100%;
    }
  }
`;

export default StyledVitrine;
