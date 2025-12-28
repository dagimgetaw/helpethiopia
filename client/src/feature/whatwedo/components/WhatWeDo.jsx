// src/feature/whatwedo/components/WhatWeDo.jsx
import SimpleHero from "./SimpleHero";
import CoreServices from "./CoreServices";
import ProcessFlow from "./ProcessFlow";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHero />
      <CoreServices />
      <ProcessFlow />
    </div>
  );
};

export default WhatWeDo;
