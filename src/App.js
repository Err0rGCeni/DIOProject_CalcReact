import { evaluate } from "mathjs";

import * as Styled from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentCalc, setCurrentCalc] = useState("");
  const [previousCalc, setPreviousCalc] = useState("");
  const [reset, setReset] = useState(false);

  const handleClearNumber = () => {
    setCurrentCalc("");
    setPreviousCalc("");
    setReset(false);
  };

  const handleConcatNumber = (number) => {
    const notNumber = ["<", "C", "/", "*", "-", "+"];

    if (notNumber.includes(number)) {
      setCurrentCalc((prev) => prev + number);
      setReset(false);
    } else {
      if (reset) {
        setCurrentCalc(number);
        setPreviousCalc(currentCalc);
        setReset(false);
      } else {
        setCurrentCalc((prev) => prev + number);
      }
    }
  };

  const handleEraseDigit = () => {
    if (reset) {
      setCurrentCalc("");
      setReset(false);
    } else {
      setCurrentCalc((prev) => prev.slice(0, -1));
    }
  };

  const handleEquals = () => {
    try {
      const result = evaluate(currentCalc);
      setCurrentCalc(result.toString());
      setPreviousCalc(currentCalc);
      setReset(true);
    } catch (error) {
      setCurrentCalc("Error");
      setReset(true);
    }
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Input prevValue={previousCalc} currentValue={currentCalc} />
        <Styled.Row>
          <Button operation={"disabled"} disabled />
          <Button operation={"disabled"} disabled />
          <Button
            label="<"
            operation={"special"}
            onClick={handleEraseDigit}
          />
          <Button
            label="C"
            operation={"special"}
            onClick={handleClearNumber}
          />
        </Styled.Row>
        <Styled.Row>
          <Button label="7" onClick={() => handleConcatNumber("7")} />
          <Button label="8" onClick={() => handleConcatNumber("8")} />
          <Button label="9" onClick={() => handleConcatNumber("9")} />
          <Button
            label="/"
            operation={"operator"}
            onClick={() => handleConcatNumber("/")}
          />
        </Styled.Row>
        <Styled.Row>
          <Button label="4" onClick={() => handleConcatNumber("4")} />
          <Button label="5" onClick={() => handleConcatNumber("5")} />
          <Button label="6" onClick={() => handleConcatNumber("6")} />
          <Button
            label="*"
            operation={"operator"}
            onClick={() => handleConcatNumber("*")}
          />
        </Styled.Row>
        <Styled.Row>
          <Button label="1" onClick={() => handleConcatNumber("1")} />
          <Button label="2" onClick={() => handleConcatNumber("2")} />
          <Button label="3" onClick={() => handleConcatNumber("3")} />
          <Button
            label="-"
            operation={"operator"}
            onClick={() => handleConcatNumber("-")}
          />
        </Styled.Row>
        <Styled.Row>
          <Button label="0" onClick={() => handleConcatNumber("0")} />
          <Button label="." onClick={() => handleConcatNumber(".")} />
          <Button label="=" operation={"special"} onClick={handleEquals} />
          <Button
            label="+"
            operation={"operator"}
            onClick={() => handleConcatNumber("+")}
          />
        </Styled.Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default App;
