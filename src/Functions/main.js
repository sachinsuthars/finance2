exports.urlParam = (name) => {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)', 'i').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
};

exports.socialFix = (arrayToFix) => {
    arrayToFix = arrayToFix.replace(/,/g, '%2C').split('%2C');
    return arrayToFix;
};



let urlParams = (name) => {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)', 'i').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
};



//Grabs a url param and fills the value of a field

exports.parameterPopulateDefault = (parameter, field, defaultValue)=>{

     if(urlParams(parameter)){
         
         document.getElementById(field).value = urlParams(parameter);
         
     } else {
         
       document.getElementById(field).value = defaultValue;
       
     }

};


//Hide and show dom elements if parameter is not present
exports.showElements = (parameter, element )=>{
    
   if(!urlParams(parameter)){
     document.getElementById(element).style.display = 'block';
   }
   
};

exports.hideElements = (parameter, element )=>{
    
   if(urlParams(parameter)){
     document.getElementById(element).style.display = 'none';
   }
   
};

