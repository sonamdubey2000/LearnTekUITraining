var countryArray =[];

function AddCountry() {
        var inputvalue = document.getElementById("country").value;
        countryArray.push(inputvalue);
        console.log('input '+inputvalue);
        var display ='List of values below <br>';
        var i;
        for(i =0; i< countryArray.length; i++) {
            display +=  countryArray[i] +"<br>";
            
        }
        document.getElementById("result").innerHTML = display;
        document.getElementById("country").innerHTML ='';
        return false;

}

function SortCountry() {
    countryArray.sort();
    var display ='List of values below <br>';
    var i;
    for(i =0; i< countryArray.length; i++) {
        display +=  countryArray[i] +"<br>";
        
    }
    document.getElementById("result").innerHTML = display;
    document.getElementById("country").innerHTML ='';
    return false;

}

function DeleteCountry(){
    countryArray.splice([countryArray.length-1], 1);
    var display ='List of values below <br>';
    var i;
    for(i =0; i< countryArray.length; i++) {
        display +=  countryArray[i] +"<br>";
        
    }
    document.getElementById("result").innerHTML = display;
    document.getElementById("country").innerHTML ='';
}