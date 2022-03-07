import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }

    :root {
        --purple1: #401459;
        --purple2: #901590;
        --purple3: #9900ff;

        --grey1: #212529;
        --grey2: #343B41;
        --grey3: #868E96;
        --grey4: #F8F9FA;

    }

    body {
        font-family: 'Nunito', sans-serif;
    }
`;
