import React from "react";
import { useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  UndoButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="h-96">
          {slides.map((obj, index) => {
            return (
              <div className="h-full" key={index}>
                <div className="flex h-full select-none items-center justify-center">
                  {obj}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative ml-0 mt-4 flex items-center justify-center gap-4 md:ml-8">
        <UndoButton onClick={onPrevButtonClick} isDisabled={prevBtnDisabled} />
        <PrevButton onClick={onNextButtonClick} isDisabled={nextBtnDisabled} />
        <div className="w-14 text-center">
          {selectedIndex + 1} / {slides.length}
        </div>
        <NextButton onClick={onNextButtonClick} isDisabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
