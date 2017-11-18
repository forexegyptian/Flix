const React = require('react');
import FilmList from './FilmList';


class App extends React.Component{
state = {answer:42};
	render(){

		return(
 <FilmList />
			);
	}
}


/*
const App = () => {

return (

   <h2> Hello components</h2>

	);

};
*/

export default App;