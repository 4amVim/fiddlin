async function _getData() {
        const url = "https://truequoteinsurance.com/api/Vehicle/getListings";
        console.log('gonna wait on the API');
        let data = await fetch(url).then(response => response.json());
        data = JSON.stringify(data).replaceAll(/\\n|\\t|\\|""/g, ''); //Clean up the dirty whitespace
        data = data.replaceAll(/"(?=\d{4})|(?<=\d{4})"/g, ''); //Years are numbers now
        Data = JSON.parse(data.replace(/"{2}/, '')) //JSFiddle Regex!==JS Regex apparently -_-
        console.log('data has been parsed');
        return Data;
      }