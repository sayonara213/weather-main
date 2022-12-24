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
`;

export const AirTextSmall = styled.p`
    color: ${theme.colors.grey};
    font-size: ${theme.fontSize.medium};
`;