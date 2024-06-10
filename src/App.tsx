import Circle from "./components/Circle/Circle";
import CirclePoints from "./components/CirclePoints/CirclePoints";
import { Container } from "./styles/app";

function App() {
  return (
    <Container>
      <Circle radius={265} color="#42567A">
        <CirclePoints radius={265} numPoints={6} color="#42567A" />
      </Circle>
    </Container>
  );
}

export default App;
