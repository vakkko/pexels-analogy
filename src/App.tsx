import { useState } from "react";
import HeaderSearch from "./components/HeaderSearch/HeaderSearch";
import ImagesContainer from "./components/ImagesContainer/ImagesContainer";
import GlobalStyles from "./styles/globalStyles.styled";
import { Helmet } from "react-helmet";

function App() {
  const [text, setText] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("curated");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <HeaderSearch text={text} setText={setText} onSearch={handleSearch} />
      <ImagesContainer searchQuery={searchQuery} />
    </>
  );
}

export default App;
