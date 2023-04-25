import { Header, Carousel } from "@components";

const items = [
  "https://picsum.photos/800/500?random=1",
  "https://picsum.photos/800/500?random=2",
  "https://picsum.photos/800/500?random=3",
  "https://picsum.photos/800/500?random=4",
  "https://picsum.photos/800/500?random=5",
];

const App = () => {
  return (
    <div className="bg-satin-linen h-full w-full">
      <Header />
      <div className="flex justify-between mb-40">
        <div className="w-1/2 -mx-20 md:-mx-40 xl:-mx-64 mt-8">
          <img
            src="/src/assets/images/TocadoPrueba.png"
            alt="Tocado de flores secas"
            className="rotate-[130deg] scale-125 md:scale-110 pointer-events-none"
          />
        </div>
        <div className="w-1/2 -mx-20 md:-mx-40 xl:-mx-64 mt-8">
          <img
            src="/src/assets/images/TocadoPrueba.png"
            alt="Tocado de flores secas"
            className="-rotate-[65deg] scale-125 md:scale-110 pointer-events-none"
          />
        </div>
      </div>
      <Carousel items={items} />
    </div>
  );
};

export default App;
