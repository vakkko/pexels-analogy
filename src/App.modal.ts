import { Dispatch, SetStateAction } from "react";

export type DataTypes = {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
  };
  url: string;
  width: number;
};

export interface HeaderSearchProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  handleSearch: (query: string) => void;
}

export interface ImageContainerProps {
  searchQuery: string;
}
