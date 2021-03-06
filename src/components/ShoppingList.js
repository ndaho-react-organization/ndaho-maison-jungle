import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {

	const [selectedCategory, handleSearchCategorie] = useState("")

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category), []
	)

	const resultPlaylist = selectedCategory === "" ?
		plantList : plantList.filter((plant) => plant.category == selectedCategory)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			//si il existe
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)

			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>

			<Categories cats={categories} selectedCat={selectedCategory} searchCategorie={handleSearchCategorie}></Categories>
			<ul className='lmj-plant-list'>
				{resultPlaylist.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
