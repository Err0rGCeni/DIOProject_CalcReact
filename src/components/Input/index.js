import { InputContainer, InputField } from "./styles";

const Input = ({ prevValue, currentValue }) => {
  return (
    <InputContainer className={prevValue || currentValue ? "on" : ""}>
      <InputField className="prev">{prevValue} </InputField>
      <InputField className="current">{currentValue} </InputField>
    </InputContainer>
  );
};

export default Input;
