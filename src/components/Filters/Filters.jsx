import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectBrands, selectPrice } from "redux/Cars/selectors";
import { setFilter } from "../../redux/Cars/filterSlice";
import {
  FiltersWrapper,
  Input,
  Label,
  Reset,
  Submit,
  InputWrapper,
  Svg,
} from "./Filters.styled";
import { stylesForBrand } from "utils";
import { stylesForPrice } from "utils";
import { useState } from "react";

const Filters = () => {
  const [formData, setFormData] = useState({
    min: "",
    max: "",
  });

  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const price = useSelector(selectPrice);

  const handleChangeSelect = (selectedOption, type) => {
    const value = selectedOption ? selectedOption.value : "";
    dispatch(setFilter({ filter: type, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { min, max } = e.target;
    const value = { min: min.value, max: max.value };
    dispatch(setFilter({ filter: "mileageRange", value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = (type) => {
    setFormData({
      ...formData,
      [type]: "",
    });
  };
	
  return (
    <FiltersWrapper>
      <InputWrapper>
        <Label htmlFor="brand">Car brand </Label>
        <Select
          id="brnad"
          options={brands}
          styles={stylesForBrand}
          isClearable={true}
          placeholder="Enter the text"
          onChange={(selectedOption) =>
            handleChangeSelect(selectedOption, "brand")
          }
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="price">Price/ 1 hour </Label>
        <Select
          id="price"
          options={price}
          styles={stylesForPrice}
          isClearable={true}
          placeholder="To $"
          onChange={(selectedOption) =>
            handleChangeSelect(selectedOption, "price")
          }
        />
      </InputWrapper>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="min">Сar mileage / km </Label>
        <InputWrapper>
          <Input
            id="min"
            name="min"
            value={formData.min}
            pattern="[0-9]*"
            title="Please enter only numbers"
            placeholder={formData.min !== "" ? "" : "From:"}
            onChange={handleChange}
            left
          />
          <Reset onClick={() => handleReset("min")}>
            <Svg size={17} />
          </Reset>
        </InputWrapper>
        <InputWrapper>
          <Input
            name="max"
            value={formData.max}
            pattern="[0-9]*"
            title="Please enter only numbers"
            placeholder="To:"
            onChange={handleChange}
          />
          <Reset onClick={() => handleReset("max")}>
            <Svg size={17} />
          </Reset>
        </InputWrapper>
        <Submit>Search</Submit>
      </form>
    </FiltersWrapper>
  );
};

export default Filters;
