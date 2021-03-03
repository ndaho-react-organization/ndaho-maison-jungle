import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light }) {

	return (
		<li className='col-3 mt-2' onClick={()=>handleClick(name)}>
			<img className='img-thumbnail' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<button>Ajouter au panier</button>
		</li>
	)
}

export default PlantItem