import './css/App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Items from "./components/Items";
import Info from "./components/Info";
import ContactHead from "./components/ContactHead";

function App() {
  return (
    <div >
        <ContactHead />
        <Header />
        <Content />
        <Items />
        <Info />
    </div>
  );
}

export default App;
