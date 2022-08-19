import * as React from "react";
import Corousel from "./src/components/carousel/Carousel";
import itemsMock from "./src/components/carousel/mocks/items.json"
const App: React.FC = () => <Corousel items={itemsMock}/>;

export default App;
