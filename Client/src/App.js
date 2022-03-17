import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import { words } from "./word";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>{words.content}</main>
      <Footer />
    </div>
  );
}

export default App;
