import type { Features } from "types";

export default function FeatureSwitch({
  feature,
  activeFeature,
  setFeature,
}: {
  feature: Features;
  activeFeature: Features;
  setFeature: (feat: Features) => void;
}) {
  return (
    <article
      onClick={() => setFeature(feature)}
      className="h-[49px] md:h-[75px] cursor-pointer flex items-center justify-center border-t-neutral-gray/40 border-t md:border-t-0 relative"
    >
      <h3 className="text-center text-neutral-blue">{feature}</h3>
      <hr
        className={`${
          activeFeature === feature &&
          "absolute bottom-0 left-0 right-0 w-full bg-primary-red h-[4px]"
        }`}
      />
    </article>
  );
}
