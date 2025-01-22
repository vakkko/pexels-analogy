import { useEffect, useState } from "react";
import { DataType } from "../../App.modal";
import { ImageContainerProps } from "../../App.modal";

export default function ImagesContainer({ searchQuery }: ImageContainerProps) {
  const [data, setData] = useState<DataType[]>([]);

  const address = ` https://api.pexels.com/v1/search?query=${searchQuery}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(address, {
          headers: {
            Authorization:
              "400yEYHKzmiZhG5uqOXzARnaAHdBMx8kL7luupG6F3rZpRtmmZjgqHQP",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.photos || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      {data.map((photo, i) => {
        return <img key={i} src={photo.src.medium} alt={photo.alt} />;
      })}
    </div>
  );
}
