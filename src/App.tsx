import { useEffect, useState, ReactEventHandler } from "react";
import "./App.scss";

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleClik = () => {
    setIsShow(true);
  };
  const handleImgError = (e: any) => {
    console.log("e", e.target);
    e.target.src = "https://p3.ssl.qhimg.com/t011d7a9a61e6d6be72.png";
  };
  // useEffect(() => {
  //   window.addEventListener(
  //     "error",
  //     function (event) {
  //       const target = event.target;
  //       if (target instanceof HTMLImageElement) {
  //         console.log("图片加载异常", target);
  //       }
  //     },
  //     true
  //   );
  // }, []);
  return (
    <>
      <button onClick={handleClik}>点击出现弹窗</button>
      {isShow && (
        <div
          className="mask"
          onClick={() => {
            setIsShow(false);
          }}
        >
          <div className="main">
            <span>弹窗出现了</span>
            <img src="https://p4.ssl.qhimg.com/t019f326a5524ce5fcc.png" />
            <img src="https://p5.ssl.qhimg.com/t0139228d9f6f26225c.png" />
            <img
              src="https://p5.ssl.qhimg.com/t01950dfde27027b6191.jpg"
              onError={handleImgError}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
