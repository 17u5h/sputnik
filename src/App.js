import './App.css';
import {GlobalStyle, theme} from "./GlobalStyle";
import MyComponent from "./components/MyComponent";
import {Grommet} from "grommet";

function App() {

	return (
		<Grommet theme={theme} full>
			<MyComponent/>
			<GlobalStyle/>
		</Grommet>
	);
}

export default App;
