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
      <div className="relative mb-40">
        <SideImage className="inline-block left-0" imgClassName="rotate-[130deg] -translate-x-[40%]" />
        <SideImage className="inline-block right-0" imgClassName="-rotate-[65deg] translate-x-[40%]" />
      </div>
      <Carousel items={items} />
    </div>
  );
};

const SideImage = ({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) => {
  return (
    <div className={`min-h-[160px] h-[20vw] absolute z-10 ${className || ""}`}>
      <img
        src="images/TocadoPrueba.png"
        alt="Tocado de flores secas"
        className={`object-contain pointer-events-none h-full ${
          imgClassName || ""
        }`}
      />
    </div>
  );
};

export default App;
