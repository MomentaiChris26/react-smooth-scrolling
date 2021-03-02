import "./App.css";
import Section from "./components/Section/Section";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

// To add smooth scroll wrap your app in SmoothScroll
function App() {
  return (
    <SmoothScroll>
      <h2>Smooth Scrolling</h2>
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
    </SmoothScroll>
  );
}

export default App;
