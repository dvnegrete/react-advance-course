import { DataItem } from "./dataItem.type";

type DataPresenterProps = {
  data: DataItem[];
}

export const DataPresenter: React.FC<DataPresenterProps> = ({ data }) => {
  return (
    <>
    {data.map((item) => (
      <div key={item.id}>
        <img src={item.image} alt={item.name} />
        <em>{item.description}</em>
      </div>
    ) )}
    </>
  );
};
