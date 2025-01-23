import {
  HeaderSection,
  Logo,
  SearchInput,
  Button,
} from "./headerSearch.styled";
import { HeaderSearchProps } from "../../App.modal";
import React from "react";

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

  return (
    <HeaderSection>
      <Logo>pexels</Logo>
      <form onSubmit={handleSubmit}>
        <SearchInput
          name="search"
          type="text"
          placeholder="Search for photos"
          value={text}
          onChange={handleChange}
        ></SearchInput>
        <Button type="submit">Search</Button>
      </form>
    </HeaderSection>
  );
}
