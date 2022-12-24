import styled from "styled-components";
import {theme} from "../../../../const/theme";

export const CityWrap = styled.div`
  margin: 5px 0;
  
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
`;

export const CityText = styled.p`
  margin: 0 15px;
`;
