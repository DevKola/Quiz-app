import "../App.css";
import Header from "./Header";
import LightDarkMode from "./LightDarkMode";
import Main from "./Main";
import Title from "./Title";

function App() {
  return (
    <div className="w-full flex flex-col gap-1 mobile-bg-light bg-cover px-5 py-8 bg-mobile-bg-light md:bg-tablet-bg-light md:bg-left-top lg:bg-desktop-bg-light object-cover h-screen">
      <Header>
        <Title />
        <LightDarkMode />
      </Header>
      <Main />
    </div>
  );
}

export default App;
