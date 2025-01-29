import { useEffect, useState } from "react";
import { DataTypes } from "../../App.modal";
import { ImageContainerProps } from "../../App.modal";
import {
  Main,
  Pic,
  IconWrapper,
  Container,
  LoaderContainer,
  FirstDot,
  SecondDot,
  ThirdDot,
  ForthDot,
} from "./imagesContainer.styled";
import { API_URL, API_AUTH_KEY } from "../../constants/apiConstants";

export default function ImagesContainer({ searchQuery }: ImageContainerProps) {
  const [data, setData] = useState<DataTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const address = `${API_URL}${searchQuery ? searchQuery : "curated"}`;

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(`${address}&page=${page}`, {
        headers: {
          Authorization: API_AUTH_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData((prevData) => [...prevData, ...result.photos]);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setData([]);
    setPage(1);
    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight - 50 &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <Main>
        <span>Free Stock Photos</span>
        <div>
          {data.map((photo, i) => (
            <Container key={i}>
              <Pic src={photo.src.medium} alt={photo.alt} />
              <IconWrapper>
                <img src="/images/icon-heart.svg" alt="heart-icon" />
              </IconWrapper>
            </Container>
          ))}
        </div>
      </Main>
      {loading && (
        <LoaderContainer key={Date.now()}>
          <FirstDot />
          <SecondDot />
          <ThirdDot />
          <ForthDot />
        </LoaderContainer>
      )}
    </>
  );
}
