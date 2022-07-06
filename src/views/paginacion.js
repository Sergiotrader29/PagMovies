export default function Paginacion(props) {

	const getPaginas = () => {
		const resultado= [];
		for (let i = 0; i < props.total; i++) {
			resultado.push(
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			<a onClick={() => props.onChange((i+1))}
			className={props.pagina === (i+1) ? 'active' : ''}>
			   {(i+1)}
			</a>
			);
		
		}
		return resultado;

	}


	return (
	<div className="topbar-filter">
	
	<div className="pagination2">
		<span>Page {props.pagina} of {props.total}:</span>

		{getPaginas()}

		{/*<a href="/#"><i className="ion-arrow-right-b"></i></a>*/}
	</div>
 </div>
 )
}