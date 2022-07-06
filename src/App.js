
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ListadoPeliculas from './views/ListadoPeliculas';
import Blog from './views/blog';
	function App() {

	return (
		<Router>
		<Routes>
			<Route path='/' element={ <ListadoPeliculas/>}/>
			<Route path='/Blog' element={ <Blog/>}/>	
		</Routes>
		</Router>
		

	);
  
}

export default App;
