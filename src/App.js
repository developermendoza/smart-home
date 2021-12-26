import './App.css';
import { Header, About, Clients, Testimonials, Faqs, DownloadApp, Subscribe, Footer } from "./containers/";
import { AppDownload } from "./components/";

function App() {
  return (
    <div className="App">
    <Header />
    <AppDownload />
    <About />
    <Clients />
    <Testimonials />
    <Faqs />
    <DownloadApp />
    <Subscribe />
    <Footer />
    </div>
  );
}

export default App;
