import Hero from "./components/Hero/Hero";
import Wrapper from "./components/Wrapper/Wrapper";
import "./scss/global.scss";

export default function Home() {
  return (
    <div className="App">
      <Wrapper mode={mode}>
        {/* <TopNav handlerMode={handlerMode} handlerLang={handlerLang} mode={mode} lang={lang} /> */}
        <Hero lang={lang} />

      </Wrapper>
    </div>
  );
}
