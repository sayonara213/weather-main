import styled from "styled-components";
import {theme} from "../../../const/theme";

export const InputWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  
  position: relative;
  
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
`;

export const InputForm = styled.form`
  margin: 0 15px;
  
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputField = styled.input`
  width: 100%;
  
  background-color: ${theme.colors.background};
  border: none;
  outline: none;

  font-size: ${theme.fontSize.small};
`;

export const CityList = styled.div`
  padding: 20px 0;
  
  width: 100%;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  
  position: absolute;
  top: 50px;
  
  
`;