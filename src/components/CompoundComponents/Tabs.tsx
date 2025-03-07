import React, { ReactElement, ReactNode, useState } from "react";
import classes from "./CompoundComponents.module.css";

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({children}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  }

  const tabElements = React.Children.toArray(children).filter(
    (child):child is ReactElement => React.isValidElement(child)
  )

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeIndex ? classes.TabActive : ""}
          >
            {tab.props.label}
          </li>
        ))}
      </ul>
      <p className={classes.TabContent}>
        {tabElements[activeIndex].props.children}
      </p>
    </div>
  );
};

export default Tabs;
