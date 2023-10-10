import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectBrands, selectPrice } from "redux/Cars/selectors";
import { setFilter } from "../../redux/Cars/filterSlice";
import { FiltersWrapper, Input, Submit } from "./Filters.styled";
import { stylesForBrand } from "utils";
import { stylesForPrice } from "utils";
import { useState } from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const [needReset, setNeedReset] = useState(false);

  const brands = useSelector(selectBrands);
  const price = useSelector(selectPrice);

  const handleChangeBrand = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : "";
    dispatch(setFilter({ filter: "brand", value }));
  };

  const handleChangePrice = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : "";
    dispatch(setFilter({ filter: "price", value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { min, max } = e.target;
    const value = { min: min.value, max: max.value };
    dispatch(setFilter({ filter: "mileageRange", value }));
    setNeedReset(true);
  };
  const handleReset = (e) => {
    e.target.reset();
    setNeedReset(false);
  };
  return (
    <FiltersWrapper>
      <Select
        options={brands}
        styles={stylesForBrand}
        isClearable={true}
        placeholder="Enter the text"
        onChange={handleChangeBrand}
      />
      <Select
        options={price}
        styles={stylesForPrice}
        isClearable={true}
        placeholder="To $"
        onChange={handleChangePrice}
      />
      <form onSubmit={needReset ? handleReset : handleSubmit}>
        <Input
          name="min"
          pattern="[0-9]*"
          title="Please enter only numbers"
          placeholder="From:"
          left
        />
        <Input
          name="max"
          pattern="[0-9]*"
          title="Please enter only numbers"
          placeholder="To:"
        />

        <Submit>{needReset ? "Reset" : "Search"}</Submit>
      </form>
    </FiltersWrapper>
  );
};

export default Filters;
