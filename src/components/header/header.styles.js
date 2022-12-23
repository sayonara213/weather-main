import styled from "styled-components";
import {THEME} from "../../const/theme";


export const HeaderWrap = styled.div`
    width: 100%;
    height: 100px;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    background-color: ${THEME.colors.background};
    border-radius: 20px;
`;

export const HeaderText = styled.h1`
    font-size: ${THEME.fontSize.large};
    color: ${THEME.colors.black};
  
`;