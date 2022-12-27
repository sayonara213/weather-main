import styled from "styled-components";
import {theme} from "../../../const/theme";

export const AirWrap = styled.div`
  margin: 0 200px 0 20px;
  
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextWrap = styled.div`

`;

export const AirTextBig = styled.h1`
  margin: 20px 0;
  color: ${props => props.theme.colors.text}
`;

export const AirTextSmall = styled.p`
    color: ${props => props.theme.colors.grey};
    font-size: ${props => props.theme.fontSize.medium};
`;