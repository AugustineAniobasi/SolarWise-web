import "./App.css";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Card from "./components/CardComponent";
import solarHome from "./assets/images/solar-home.png";
import Banner from "./components/BannerComponent";

function App() {
  const cardSample = {
    image: solarHome,
    title: "What’s the Right Solar Panel for Your Home?",
    content:
      "Not all solar panels are the same! Monocrystalline, Polycrystalline, or Thin Film—which one suits your needs best?",
  };

  return (
    <>
      <Banner>
        This banner can be used to inform vistors of something important.
      </Banner>
      <Header />
      <Footer />
      <Card
        image={cardSample.image}
        title={cardSample.title}
        content={cardSample.content}
      />
    </>
  );
}

export default App;
