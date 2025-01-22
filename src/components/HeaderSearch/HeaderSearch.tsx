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
    setText(event.target.value);
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
