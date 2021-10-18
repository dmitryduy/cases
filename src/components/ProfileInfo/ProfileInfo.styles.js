import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  font-family: 'Comfortaa', cursive;
  font-weight: bold;
  padding-right: 30px;
  @media (max-width: 400px) {
    padding-right: 10px;
  }
`;

export const ProfileImage = styled.img`
  margin-right: 10px;
  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const ProfileName = styled.span`
  display: block;
  color: #fff;
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const ProfileBalance = styled.span`
  display: block;
  color: #22e2ff;
  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

