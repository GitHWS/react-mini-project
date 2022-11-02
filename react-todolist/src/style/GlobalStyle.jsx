import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStlye = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing: border-box;
  }

  html{
    font-size:62.5%;
  }

  input{
    border:none;
  }

  input:focus{
    outline:none;
  }

  button{
    border:none;
    cursor: pointer;
  }
`;

export default GlobalStlye;
