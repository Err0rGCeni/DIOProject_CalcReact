import { ButtonContainer } from "./styles";

const Button = ({ label, onClick = null, operation, disabled = false }) => {
  return (
    <ButtonContainer
      type={"button"}
      onClick={onClick}
      className={operation}
      disabled={disabled}
    >
      {label}
    </ButtonContainer>
  );
};

export default Button;
