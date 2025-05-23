import { useState } from "react";
import HeaderSearch from "./components/HeaderSearch/HeaderSearch";
import ImagesContainer from "./components/ImagesContainer/ImagesContainer";
import GlobalStyles from "./styles/globalStyles.styled";

function App() {
  const [text, setText] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("curated");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <GlobalStyles />
      <HeaderSearch text={text} setText={setText} handleSearch={handleSearch} />
      <ImagesContainer searchQuery={searchQuery} />
    </>
  );
}

export default App;
