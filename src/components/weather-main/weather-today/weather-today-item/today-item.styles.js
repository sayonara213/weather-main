import styled from "styled-components";
import {theme} from "../../../../const/theme";

export const TodayItemWrap = styled.div`
    margin-bottom: 30px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const TodayTime = styled.p`
  margin: 0;
  
  font-size: ${theme.fontSize.medium};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.grey};
`;

export const TodayIcon = styled.img`
    margin: 10px 0;
    object-fit: contain;
    width: 75px;
`;

export const TodayTemp = styled.p`
  margin: 0;
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text};
`;