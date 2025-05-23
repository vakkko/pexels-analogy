import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
  background-color: rgba(0, 0, 0, 0.4);
   background-image: url("${import.meta.env.BASE_URL}images/pexels-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 12rem;
  background-position: 20%;
  background-blend-mode: overlay;
`;

export const Logo = styled.span`
  font-family: "Dancing Script", serif;
  font-size: 4rem;
  color: white;
  font-weight: 700;
  margin-left: 5rem;
`;

export const SearchInput = styled.input`
  padding: 1.5rem 35.5rem 1.5rem 6rem;
  border: none;
  border-radius: 10px;
  font-family: "Lato", serif;
  font-size: 1.5rem;
  outline: none;

  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  background-color: #5d3b63;
  border-radius: 15px;
  padding: 1.2rem 1.5rem;
  margin-left: 1rem;
  color: white;
  cursor: pointer;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  form {
    position: relative;
  }
`;

export const Paragraph = styled.p`
  font-family: "Lato", serif;
  color: white;
  font-size: 3.3rem;
  width: 40%;
  min-height: 9rem;
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const GalleryIcon = styled.img`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;
