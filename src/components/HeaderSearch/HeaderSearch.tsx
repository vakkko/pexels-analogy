import {
  HeaderSection,
  Logo,
  SearchInput,
  Section,
  Paragraph,
  SearchButton,
  GalleryIcon,
} from "./headerSearch.styled";
import { HeaderSearchProps } from "../../App.modal";
import React from "react";
import useTypeWriter from "../../hooks/useTypeWriter";

export default function HeaderSearch({
  text,
  setText,
  handleSearch,
}: HeaderSearchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValid = /^[a-zA-Z\s]*$/.test(value);

    if (isValid) {
      setText(event.target.value);
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    if (typeof formJson.search === "string") {
      handleSearch(formJson.search);
    } else {
      console.error("Search value is not a string");
    }
  }

  const displayText = useTypeWriter(
    `The best free stock photos, royalty free images & videos shared by creators`
  );

  return (
    <HeaderSection>
      <Logo>pexels</Logo>
      <Section>
        <Paragraph>{displayText}</Paragraph>
        <form onSubmit={handleSubmit}>
          <GalleryIcon src="/images/icon-gallery.svg" alt="gallery-icon" />
          <SearchInput
            name="search"
            type="text"
            placeholder="Search for free photos"
            value={text}
            onChange={handleChange}
          />
          <SearchButton type="submit">
            <img src="/images/search-loop.svg" alt="search-icon" />
          </SearchButton>
        </form>
      </Section>
    </HeaderSection>
  );
}
