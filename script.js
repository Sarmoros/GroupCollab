
function getApi(){
    var requestUrl = 'https://www.loc.gov/books/?fo=json';

    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
       
};

getApi();


//Add new JavaScript Below Here