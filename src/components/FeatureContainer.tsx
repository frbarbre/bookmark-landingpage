import { useState } from "react";
import FeatureSwitcher from "./FeatureSwitcher";
import { Features } from "types";
import FeatureTab from "./FeatureTab";
import { featuresTab } from "@constants/index";

export default function FeatureContainer() {
  const [feature, setFeature] = useState<Features>(Features.simple);
  const activeFeature = featuresTab.find((tab) => tab.id === feature);
  if (!activeFeature) return null;

  return (
    <div>
      <FeatureSwitcher activeFeature={feature} setFeature={setFeature} />
      <FeatureTab
        image={activeFeature?.image}
        text={activeFeature.text}
        title={activeFeature?.title}
      />
    </div>
  );
}
