import {
  HeaderSection,
  Logo,
  SearchInput,
  Section,
  Paragraph,
} from "./headerSearch.styled";
import { HeaderSearchProps } from "../../App.modal";
import React from "react";
import useTypeWriter from "../../hooks/useTypeWriter";

export default function HeaderSearch({
  text,
  setText,
  onSearch,
}: HeaderSearchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValid = /^[a-zA-Z\s]*$/.test(value);

    if (isValid) {
      setText(event.target.value);
      if (value.length === 3) {
        const formEvent = new Event("submit", { bubbles: true });
        event.target.form?.dispatchEvent(formEvent);
      }
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    if (typeof formJson.search === "string") {
      onSearch(formJson.search);
    } else {
      console.error("Search value is not a string");
    }
  }

  const displayText = useTypeWriter(
    `Pexels provides high quality and completely free stock photos licensed under the Pexels license. All photos are nicely tagged, searchable and also easy to discover through our discover pages.`
  );

  return (
    <HeaderSection>
      <Section>
        <Logo>pexels</Logo>
        <form onSubmit={handleSubmit}>
          <SearchInput
            name="search"
            type="text"
            placeholder="SEARCH"
            value={text}
            onChange={handleChange}
          ></SearchInput>
        </form>
      </Section>
      <Paragraph>{displayText}</Paragraph>
    </HeaderSection>
  );
}
