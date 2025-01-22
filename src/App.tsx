import { useState } from "react";
import HeaderSearch from "./components/HeaderSearch/HeaderSearch";
import ImagesContainer from "./components/ImagesContainer/ImagesContainer";
function App() {
  const [text, setText] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("trending");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <HeaderSearch text={text} setText={setText} onSearch={handleSearch} />
      <ImagesContainer searchQuery={searchQuery} />
    </>
  );
}

export default App;
