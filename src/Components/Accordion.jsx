import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="">
      <h1>Accordion</h1>
      <Panel
        title="Bangladesh"
        isActive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem neque
        necessitatibus quae aliquam natus, reprehenderit maxime animi quisquam
        fugiat odit
      </Panel>
      <Panel
        title="Indonesia"
        isActive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Indonesia is a one of the most beautiful country in the world. People
        are also very nice and most of them are followed are islamic rules.
      </Panel>
    </div>
  );
}
