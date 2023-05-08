const SideImage = ({
    className,
    imgClassName,
  }: {
    className?: string;
    imgClassName?: string;
  }) => {
    return (
      <div className={`min-h-[160px] h-[30vw] absolute z-10 ${className || ""}`}>
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

  export default SideImage;