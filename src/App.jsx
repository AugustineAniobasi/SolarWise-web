import "./App.css";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Card from "./components/CardComponent";
import solarHome from "./assets/images/solar-home.png";
import gettingStarted from "./assets/images/getting-started.png";
import Banner from "./components/BannerComponent";

function App() {
  const cardSample = {
    image: solarHome,
    title: "What’s the Right Solar Panel for Your Home?",
    content:
      "Not all solar panels are the same! Monocrystalline, Polycrystalline, or Thin Film—which one suits your needs best?",
  };

  const categorySample = {
    image: gettingStarted,
    title: "Getting Started",
    content: "(Solar Basics & How It Works)",
  };

  return (
    <>
      <Banner>
        This banner can be used to inform vistors of something important.
      </Banner>
      <Header />
      <Footer />
      <Card
        for="blog"
        image={cardSample.image}
        title={cardSample.title}
        content={cardSample.content}
        link="#"
      />
      <Card
        for="category"
        image={categorySample.image}
        title={categorySample.title}
        content={categorySample.content}
        link="#"
      />
    </>
  );
}

export default App;
