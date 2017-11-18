import BookList from './BookList';

class App extends React.Component{
state = {answer:42};
	render(){

		return(
 <BookList />
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