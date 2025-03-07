import { useState } from "react";

function useLoading(initialLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState(initialLoading);
  return {
    isLoading,
    setIsLoading
  }
}

type UserComponentProps = {
  name: string;
}

const UserComponent: React.FC<UserComponentProps> = ({ name }) => {
  const { isLoading, setIsLoading } = useLoading(false);

  return isLoading ? <div>Loading...</div> : (
    <div>
      <p>Hola, {name}!</p>
      <button onClick={() => setIsLoading(true)}>Simulate Loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="DamianDev" />;
};
