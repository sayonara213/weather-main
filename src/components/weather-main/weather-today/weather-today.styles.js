import styled from "styled-components";
import {theme} from "../../../const/theme";

export const SectionWrap = styled.div`
  margin: 10px 0 0 0;
  width: 100%;
  
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
`;

export const PlainText = styled.p`
  margin: 20px;
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.grey};

`;

export const TodayWrap = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;