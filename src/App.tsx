import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [chatText, setChatText] = useState("");

  const getRes = async () => {
    try {
      const res = await fetch("http://localhost:3000/sse", {
        method: "get",
      });
      const reader = res.body?.getReader();
      let text = "";
      while (reader) {
        const { value, done } = await reader.read();
        console.log("value", value);
        const chars = new TextDecoder().decode(value);
        if (done) {
          break;
        }
        const dataArray = chars.trim().split("\n\n");
        const jsonObjects = dataArray.map((data) => {
          const jsonString = data.substring("data: ".length);
          return JSON.parse(jsonString);
        });
        jsonObjects.forEach((item) => {
          text += item.content;
        });
        setChatText(text);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getRes();
  }, []);
  return <div>{chatText}</div>;
}

export default App;
