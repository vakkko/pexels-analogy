import { useState, useEffect } from "react";

const useTypeWriter = (text: string, speed: number = 30) => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let i: number = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

export default useTypeWriter;
