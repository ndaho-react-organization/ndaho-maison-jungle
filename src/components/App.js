import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="container">
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className="row no-gutters">
			<Cart />
			<ShoppingList />
			</div>

			{/* <QuestionForm></QuestionForm> */}
			<Footer></Footer>
		</div>
	)
}

export default App