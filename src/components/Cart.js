import { useEffect, useState } from 'react'
import '../styles/Cart.css'



function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	//on va appeler ça toujours quand le composant est re-render
	// useEffect(() => {
	// 	document.title = `Ndaho Maison de Jungle`
	// })

	//on va appeler ça uniquement la premiere fois
	useEffect(() => {
		document.title = `Ndaho Maison de Jungle`
	}, [])

	//on va appeler ça pour la premiere fois et quand le total change
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	//on va appeler ça uniquement quand le composant est demonté( avec un return)
	// useEffect(() => {
	// 	return console.log(`Notre cart est demonté/caché`);
	// })


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
            </button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
					<div>Votre panier est vide</div>
				)}
		</div>
	) : (
			<div className='lmj-cart-closed'>
				<button
					className='lmj-cart-toggle-button'
					onClick={() => setIsOpen(true)}
				>
					Ouvrir le Panier
            </button>
			</div>
		)
}

export default Cart
