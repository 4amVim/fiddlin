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

// Pass this 'year' or 'price' and it'll increment a sort in that direction
function sort ( field ) {
	const icon = document.getElementById( `${ field }icon` );
	let sort; //?Shows us the utility of a quadratic boolean

	//?figure out which direction to sort in and icon and label
	switch ( icon.innerHTML ) {
		case '':
			toggleLabel( field, false );
			const altField = ( field == 'year' ) ? 'price' : 'year';
			if ( document.getElementById( `${ altField }icon` ).innerHTML != '' ) { toggleLabel( altField, true ); }
			icon.innerHTML = 'trending_up';
			sort = true;
			break;
		case 'trending_up':
			icon.innerHTML = "trending_down";
			sort = false;
			break;
		case 'trending_down':
			toggleLabel( field, true );
			sort = null;
			break;
		default:
			console.error( 'How did I come here, what am I doing?!' )
			break;
	}

	function toggleLabel ( field, remove ) {
		window.requestAnimationFrame( () => {
			document.getElementById( `${ field }label` ).animate( [
				{ // from
					'padding-right': '4px',
					'padding-bottom': '10px',
					width: '50px'
				},
				{ // to
					padding: 0,
					width: 0,
				}
			], {
				delay: 30,
				direction: remove ? 'reverse' : 'normal',
				duration: 500,
				fill: 'forwards',
				easing: 'ease-in-out'
			} );
			if ( remove ) {
				document.getElementById( `${ field }icon` ).innerHTML = '';
			}
		} );
	}

	const db = Data.data.slice();
	//? Sort the list and redraw
	if ( sort == null ) {
		renderList( db );
	} else {
		field == 'year' ?
			renderList( db.sort( ( a, b ) => ( b.Year - a.Year ) * ( 2 * sort - 1 ) ) ) :
			renderList( db.sort( ( a, b ) => ( a.Price - b.Price ) * ( 2 * sort - 1 ) ) );
	}
}

// Our primary paint, calculates and fills the item grid
function renderList ( cardsList ) {
	if ( cardsList === undefined ) {
		cardsList = SortState
	} else {
		SortState = cardsList;//So that we always have a list with the latest Sort
	}
	const itemGrid = document.getElementById( 'item_grid' );

	itemGrid.innerHTML = '';
	for ( let i = 0; i < cardsList.length; i++ ) {
		const card = cardsList[i];
		if ( !( MaskState.has( card.Make ) || MaskState.has( card.Model ) ) ) {
			let div = document.createElement( 'div' );
			let age = ( new Date() ).getFullYear() - card.Year;
			ModelList.add( card.Model );
			BrandList.add( card.Make );
			div.innerHTML = `\
                    <img src=${ card.Image } alt='${ card.Make + ' ' + card.Model }' >
                    <h1 style="color: var(--dark-text);">
                        ${ card.Make } ${ card.Model }
                    </h1>
                    <h1 style="display:flex;">
                        <span style="color:var(--txt-price);"> $${ card.Price }</span>
                        <span style="color:var(--txt-years);">${ age } years </span>
                    </h1>
                        `;
			div.className = 'card';
			div.onclick = function () {
				window.open( `mailto:birb@birbcorp.com?subject=Buy ${ card.Make } ${ card.Model }&body=You had listed this car for $${ card.Price } on your website. I wanted to know if its still available.` );
			}
			itemGrid.appendChild( div );
		}
	}
	window.requestAnimationFrame( function () {
		let foo = document.getElementsByClassName( 'card' );
		for ( const card of foo ) {
			card.animate( [
				{ // from
					transform: 'scale( 1, 1 )'
				},
				{ // to
					transform: 'scale( 0, 0 )'
				},
				{ // from
					transform: 'scale( 1, 1 )'
				},
			], {
				delay: 30,
				duration: 500,
				// fill: 'forwards',
				easing: 'ease-in-out'
			} );
		}
		// } );
	} );


	console.log( 'redrew' );
}

function dropup ( sortButton ) {
	populateDropup( sortButton );
	function slide ( ul, up ) {
		window.requestAnimationFrame( function () {
			document.getElementById( `${ ul }-dropup` ).style.transform = up ? 'translateY(calc(4px - 30vh))' : 'translateY(calc(30vh - 4px))';
			document.getElementById( ul ).classList.toggle( `${ ul }Hover` )
		} )
	}
	if ( isBrandsOpen == null ) {
		slide( sortButton, true );
	} else {
		let foo = isBrandsOpen ? 'brand' : 'model';
		populateDropup( foo );
		if ( sortButton == foo ) {
			slide( sortButton, false );
			isBrandsOpen = null;
			return;
		} else {
			slide( foo, false );
			slide( sortButton, true );
		}
	}
	isBrandsOpen = sortButton == 'brand';

	function populateDropup ( page ) {
		let dropup = document.getElementById( `${ page }-dropup` );
		dropup.innerHTML = '';
		const list = page === 'model' ? ModelList : BrandList;

		function generateIntro ( page ) {
			let intro = document.createElement( 'p' );
			intro.innerHTML = `Filter cars by their ${ page }s:`;
			return intro
		}

		dropup.appendChild( generateIntro( page ) );

		for ( let item of list ) {
			const label = item;
			const status = MaskState.has( label ) ?
				'check_box_outline_blank' : 'check_box';
			let li = document.createElement( 'li' )
			li.innerHTML = `<button onclick="toggleMask('${ label }')"><span id="${ label }" class="material-icons">${ status }</span>${ label } </button>`
			li.className = "tagSelect";
			dropup.appendChild( li );
		}
	}
}


function toggleMask ( name ) {
	console.log( 'I got toggled' + name );
	if ( MaskState.has( name ) ) {
		document.getElementById( name ).innerHTML = 'check_box';
		MaskState.delete( name );
	} else {
		document.getElementById( name ).innerHTML = 'check_box_outline_blank';
		MaskState.add( name );
	}
	renderList();
}

function search () {
	let input = document.getElementById( 'search' );
	let grid = document.getElementById( 'item_grid' )

	const filter = input.value.toLowerCase();
	let db = Data.data.slice();
	let filteredb = [];
	for ( const card of db ) {
		const match = ( card.Make + card.Model ).toLowerCase();
		if ( match.includes( filter ) ) {
			filteredb.push( card );
		}
	}
	renderList( filteredb );
}