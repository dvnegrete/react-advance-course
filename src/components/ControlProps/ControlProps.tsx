import { useState } from "react";

type ToogleProps = {
  isToggled?: boolean;
  onToogle?: (value: boolean) => void;
}

const Toggle: React.FC<ToogleProps> = ({ isToggled = false, onToogle }) => {
  const [internalToogle, setInternalToogle] = useState(isToggled);

  const toggle = () => {
    const newToogle = !internalToogle;
    setInternalToogle(newToogle);
    if (onToogle) {
      onToogle(newToogle);
    }
  }

  return (
    <button onClick={toggle}>
      {internalToogle ? "ON" : "OFF"}
    </button>
  );
};

export const ParentComponent = () => {
  const [toogleState, setToogleState] = useState(false);
  return (
    <div>
      <p>Toggle is {toogleState ? "ON" : "OFF"}</p>
      <Toggle onToogle={setToogleState} isToggled={toogleState} />
    </div>
  );
};

