import React from "react";

function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;
    return isLoading ? <div>Loading...</div> : <Component {...rest as T} />
  }
}
type UserProps = {
  name: string;
}

const userComponent: React.FC<UserProps> = ({ name }) => {
  return <p>¡Bienvenido {name}!</p>
}

const UserWithLoading = withLoading(userComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={true} name="DamianDev"></UserWithLoading>
      <UserWithLoading isLoading={false} name="DamianDev"></UserWithLoading>
    </div>
  );
};
