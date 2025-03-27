import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const lightTheme = {
    background: "#fff",
    text: "#000",
    buttonBg: "#000",
    buttonText: "#fff",
  };
  
export const darkTheme = {
    background: "#000",
    text: "#fff",
    buttonBg: "#fff",
    buttonText: "#000",
  };

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: all 0.3s ease;
    }
    `;

export const Button = styled.button`
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
`;