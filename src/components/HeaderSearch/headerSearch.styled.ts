import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url("/images/pexels-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 35rem;
  padding-top: 2rem;
  background-position: 20%;
  background-blend-mode: overlay;
`;

export const Logo = styled.span`
  font-size: 4rem;
  color: white;
  font-weight: 700;
`;

export const SearchInput = styled.input`
  padding: 1.2rem 7rem 1.2rem 1.5rem;
  border-radius: 15px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  border: none;
  background-color: #658d9e;
  border-radius: 15px;
  padding: 1.2rem;
  margin-left: 1rem;
  color: white;
  cursor: pointer;
`;
