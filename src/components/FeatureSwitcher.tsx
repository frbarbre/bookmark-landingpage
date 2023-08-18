import { features } from "@constants/index";
import type { Features } from "types";
import FeatureSwitch from "./FeatureSwitch";

export default function FeatureSwitcher({
  activeFeature,
  setFeature,
}: {
  activeFeature: Features;
  setFeature: (feature: Features) => void;
}) {
  return (
    <section className="pt-[35px] mb-[58px] md:pt-[50px] md:mb-[71px] max-w-[730px] mx-auto grid md:grid-cols-3 border-b-neutral-gray/40 border-b">
      {features.map((feature) => (
        <FeatureSwitch
          key={feature}
          activeFeature={activeFeature}
          feature={feature}
          setFeature={setFeature}
        />
      ))}
    </section>
  );
}
