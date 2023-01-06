import styled from "styled-components";

export const AirWrap = styled.div`
  margin: 0 18px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    margin-top: 5px;
  }
  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    height: 150px;
  }
`;

export const TextWrap = styled.div`
  margin-bottom: 10px;
  
  display: flex;
  flex-direction: column;
`;

export const AddWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AirTextBig = styled.h1`
  margin: 0 10px;
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.font.bold};

  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const AirTextSmall = styled.p`
  margin-left: 50px;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.font.bold};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const AirIcon = styled.img`
  width: 40px;
  height: auto;
`;

export const SectionName = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
`;