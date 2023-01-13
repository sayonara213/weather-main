import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 70px;
  height: 860px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};

  @media (max-width: 992px) {
    width: 100%;
    height: 80px;

    flex-direction: row;
  }
  
  & > * {
    cursor: pointer;
  }
`;

export const HeaderIcon = styled.img`
  margin: 10px;

  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export const HeaderButton = styled.p`
  height: 50px;
  width: 50px;
  color: ${props => props.theme.colors.text};
  font-size: 50px;
  font-family: ${props => props.theme.font.bold};
`;

export const ImgContainer = styled.div`
  margin: 10px;
  height: 50px;
  width: 50px;
`;