import styled from "styled-components";

export const AirWrap = styled.div`
  margin: 18px;
  
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

export const TextWrap = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const AddWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AirTextBig = styled.h1`
  margin: 0 10px;
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.font.bold};

  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const AirTextSmall = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.font.bold};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const AirIcon = styled.img`
    width: 50px;
    height: auto;
`;