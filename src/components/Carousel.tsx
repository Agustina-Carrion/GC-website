import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

type Props = {
  className?: string;
  items: Array<string>;
};

const Carousel: React.FC<Props> = ({ className = "", items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className={className}>
        <div className="relative overflow-hidden">
          <div ref={sliderRef} className="keen-slider flex h-[600px]">
            {items.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  className="keen-slider__slide object-cover"
                  alt="From Picsum"
                />
              );
            })}
          </div>
          {loaded && instanceRef.current && (
            <div className="flex justify-center items-center py-2">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`bg-stone-300 rounded-lg cursor-pointer mx-1.5 p-1.5 ${
                      currentSlide === idx ? "!bg-slate-900" : ""
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Carousel;
