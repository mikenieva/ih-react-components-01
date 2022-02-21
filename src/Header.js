// 1. IMPORTACIONES



// 2. FUNCIÓN
function Header (props) {

	console.log(props)

	return (
		<header>
			<p>Este es el header.</p>
			<p>Hola {props.nombre}.</p>
		</header>
	)

}



// 3. EXPORTACIÓN
export default Header