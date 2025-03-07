import { useRef } from "react";

export const UncontrolledInput = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handlerSubmit = () => {
    if (inputRef.current) {
      alert(`Producto añadido al carrito: ${inputRef.current.value} ✅`);
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre del producto: Ej. 'Zapatos'"
      />
      <button onClick={handlerSubmit}>
        Añadir al Carrito
      </button>
    </div>
  );
};
