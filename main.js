//Fetches and returns new data along with updating above cache
async function _getData () {
	const url = "https://truequoteinsurance.com/api/Vehicle/getListings";
	console.log( 'gonna wait on the API' );
	// let data = await fetch( url ).then( response => response.json() );
	await new Promise( resolve => setTimeout( resolve, 500 ) );
	console.log( 'waited' );
	Data = JSON.parse( '{"data":[{"Year":1966,"Make":"Alfa Romeo","Model":"Giulia","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alfa_Romeo_Giulia_Super.jpg/280px-Alfa_Romeo_Giulia_Super.jpg","Price":3849},{"Year":1970,"Make":"AMC","Model":"Gremlin","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gremlin_side_%285903000893%29.jpg/280px-Gremlin_side_%285903000893%29.jpg","Price":68504},{"Year":1967,"Make":"Aston Martin","Model":"DB6","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aston_Martin_DB6_r.jpg/280px-Aston_Martin_DB6_r.jpg","Price":896347},{"Year":1950,"Make":"Bentley","Model":"Mark VI","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bentley_%282542314380%29.jpg/280px-Bentley_%282542314380%29.jpg","Price":999999},{"Year":1963,"Make":"Checker","Model":"Aerobus","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Checker_Aerobus_Glacier_MT1.jpg/280px-Checker_Aerobus_Glacier_MT1.jpg","Price":-5000},{"Year":1967,"Make":"Chevrolet","Model":"Camaro","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Chevrolet_Camaro_RS_327_1968.jpg/280px-Chevrolet_Camaro_RS_327_1968.jpg","Price":123456},{"Year":1957,"Make":"Daimler","Model":"Conquest","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/DaimlerConquest_I_think_ca_1955.jpg/280px-DaimlerConquest_I_think_ca_1955.jpg","Price":9483},{"Year":1970,"Make":"DeTomaso","Model":"Pantera","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/De_Tomaso_Pantera_GT5-S_%287160836758%29.jpg/280px-De_Tomaso_Pantera_GT5-S_%287160836758%29.jpg","Price":45836},{"Year":1967,"Make":"Dodge","Model":"Charger","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Dodge.383.magnum-black.front.view-sstvwf.JPG/280px-Dodge.383.magnum-black.front.view-sstvwf.JPG","Price":8675309},{"Year":1970,"Make":"Dodge","Model":"Challenger","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/1970_Dodge_Challenger_RT_440_Magnum_%2813440447413%29.jpg/280px-1970_Dodge_Challenger_RT_440_Magnum_%2813440447413%29.jpg","Price":44442},{"Year":1969,"Make":"Dodge","Model":"Charger","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dodge_Charger_R-T_%28Gibeau_Orange_Julep%29.JPG/280px-Dodge_Charger_R-T_%28Gibeau_Orange_Julep%29.JPG","Price":36925},{"Year":1970,"Make":"Ferrari","Model":"Dino 246 GT","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Dino_246_GT_%2824627987921%29.jpg/280px-Dino_246_GT_%2824627987921%29.jpg","Price":487261},{"Year":1965,"Make":"Ford","Model":"Mustang","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/1965_Ford_Mustang_2D_Hardtop_Front.jpg/280px-1965_Ford_Mustang_2D_Hardtop_Front.jpg","Price":20000},{"Year":1974,"Make":"Jaguar","Model":"XJ","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/1973_Jaguar_XJ6_%28Series_I%29_4.2_SWB_sedan_%282015-08-02%29_01.jpg/280px-1973_Jaguar_XJ6_%28Series_I%29_4.2_SWB_sedan_%282015-08-02%29_01.jpg","Price":400},{"Year":1967,"Make":"Jaguar","Model":"340","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jaguar.3point4.750pix.jpg/280px-Jaguar.3point4.750pix.jpg","Price":3647},{"Year":1950,"Make":"Lagonda","Model":"MK I","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Lagonda_2%2C6_Litre.jpg/220px-Lagonda_2%2C6_Litre.jpg","Price":53849},{"Year":1967,"Make":"Lamborghini","Model":"Miura","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Lamborghini_Miura_%28Kirchzarten%29_jm20695.jpg/280px-Lamborghini_Miura_%28Kirchzarten%29_jm20695.jpg","Price":7775},{"Year":1963,"Make":"Lancia","Model":"Flavia","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lancia_Flavia_Coupe.jpg/280px-Lancia_Flavia_Coupe.jpg","Price":4406},{"Year":1960,"Make":"Land Rover","Model":"Series II","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Land_Rover_swb_registered_October_1958_2286cc.JPG/280px-Land_Rover_swb_registered_October_1958_2286cc.JPG","Price":89632},{"Year":1970,"Make":"Plymouth","Model":"Barracuda","Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%2770_Plymouth_Barracuda_%28%2711_Auto_classique_VAQ_Mont_St-Hilaire%29.JPG/280px-%2770_Plymouth_Barracuda_%28%2711_Auto_classique_VAQ_Mont_St-Hilaire%29.JPG","Price":85632}],"status":"success","errors":"[]","elapsedSeconds":0.005209922790527344}' );
	console.log( 'data has been parsed' );
	return Data;
}

function priceClicked () {
	let priceIcon = document.getElementById( 'priceIcon' );
	let sort; //Shows us the utility of a quadratic boolean
	switch ( priceIcon.innerHTML ) {
		case "import_export":
			priceIcon.innerHTML = "trending_up";
			sort = true;
			break;
		case "trending_up":
			priceIcon.innerHTML = "trending_down";
			sort = false;
			break;
		case "trending_down":
			priceIcon.innerHTML = "import_export";
			sort = null;
			break;
		default:
			console.error( "How did I come here, what am I doing?!" )
			break;
	}

	const db = Data.data.slice();
	sort == null ? renderList( db ) :
		renderList( db.sort( ( a, b ) => ( ( ( a.Price <= b.Price ) && sort ) ? -1 : 1 ) ) );
}

function renderList ( cardsList ) {
	console.log( cardsList );
	const itemGrid = document.getElementById( 'item_grid' );
	itemGrid.innerHTML = '';
	for ( let i = 0; i < cardsList.length; i++ ) {
		const card = cardsList[i];
		console.log( card )
		let div = document.createElement( 'div' );
		let age = ( new Date() ).getFullYear() - card.Year;

		div.innerHTML = `\
                <div class="image-crop">
                <img src=${ card.Image } alt='${ card.Make + ' ' + card.Model }' >
                </div>
                    <h1>
                        <span style="color:var(--text-brand);">${ card.Make }<\span>
                        <span style="color:var(--text-model);">${ card.Model }<\span>
                    </h1>
                    <h1>
                        <span style="color:var(--text-price); font-family:'Manuale',serif;">${ card.Price }$</span>
                        <span style="color:var(--text-years); float:right; ">${ age } years old</span>
                    </h1>
                        `;
		div.className = 'card';
		itemGrid.appendChild( div );
		itemGrid.append

	}
	console.log( priceIcon.innerHTML );
}