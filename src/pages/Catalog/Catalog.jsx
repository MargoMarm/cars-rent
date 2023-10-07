import Card from "components/Card/Card";
import { useEffect } from "react";
import { selectCars } from "redux/Cars/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "redux/Cars/operations";
import { List, PageWrapper } from "./Catalog.styled";

const Catalot = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchCars());
  }, [dispach]);

  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <PageWrapper>
      <main>
        <List>
          {cars.map((car) => {
            return <Card key={car.id} data={car} />;
          })}
        </List>
      </main>
    </PageWrapper>
  );
};

export default Catalot;
