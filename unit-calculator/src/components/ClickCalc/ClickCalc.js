import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

import Numbers from "../Numbers/Numbers";
import CountButton from "../CountButton/CountButton";
// import Dragging from "../Dragging/Dragging";

function ClickCalc(props) {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");

  function applyExpression(countedNumber) {
    setCounts(countedNumber);
    setResult(eval(counts));
  }

  return (
    // <Dragging result={result} setResult={setResult} setHistory={props.onClick}>
    <>
      <Flex
        w="100%"
        justifyContent="between"
        bg="gray.50"
        alignItems="center"
        borderRadius="8px"
        px="4px"
      >
        <Text
          display="flex"
          justifyContent="start"
          alignItems="center"
          w="100%"
          h="38px"
        >
          {counts}
        </Text>
        <Text
          display="flex"
          justifyContent="start"
          alignItems="center"
          w="fit-content"
          h="38px"
          textColor="tomato"
        >
          {result}
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Numbers data={counts} onClick={setCounts}></Numbers>
        <Flex flexDirection="column">
          <CountButton
            data={counts}
            expression={"+"}
            onClick={applyExpression}
          />
          <CountButton
            data={counts}
            expression={"-"}
            onClick={applyExpression}
          />
          <CountButton
            data={counts}
            expression={"*"}
            onClick={applyExpression}
          />
          <CountButton
            data={counts}
            expression={"/"}
            onClick={applyExpression}
          />
        </Flex>
        <Button
          alignSelf="start"
          bg="tomato"
          m="4px"
          onClick={() => {
            setResult(eval(counts));
            setCounts("0");
            props.onClick(counts);
          }}
        >
          =
        </Button>
      </Flex>
    </>
    /* </Dragging> */
  );
}

export default ClickCalc;
