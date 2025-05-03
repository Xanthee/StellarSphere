import EarthCarousel from './components/EarthCarousel';
import VenusCarousel from './components/VenusCarousel';
import StarCarousel from './components/StarCarousel';

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-screen items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <EarthCarousel />
      <div className="flex h-48 h-screen items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
      <VenusCarousel />
      <div className="flex h-48 h-screen items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
      <StarCarousel />
    </div>
  );
};

export default Example;

