
var SiteName= document.getElementById("bookmarkNAme");
var siteUrl = document.getElementById("WebsiteUrl");

var WebsitesList;

if(localStorage.getItem("Books")!= null){

    WebsitesList= JSON.parse(localStorage.getItem("Books"));

    displayData();
}
else{
    WebsitesList=[];   
}



function storeData(){

    var Websites ={

        websiteName: SiteName.value ,
        websiteUrl : siteUrl.value
    }

    WebsitesList.unshift(Websites);
    localStorage.setItem("Books",JSON.stringify(WebsitesList));
   
   displayData();
   reseat();
}


function displayData(){
 
    var counter="";
    for(i=0 ; i<WebsitesList.length ; i++){

        counter+=` <div class="display d-flex px-3 mx-3 py-4 ">

        <h3>${WebsitesList[i].websiteName}</h3>
        <button class="btn  btn-primary me-2 "  > <a href="${WebsitesList[i].websiteUrl}">Visite</a></button>
        <button class="btn  btn-danger"  onclick="deleteItem(${i})">Delete</button>
    </div>`;
    }

    document.getElementById("displayD").innerHTML=counter;
}


function deleteItem(deleteI){
    WebsitesList.splice(deleteI,1);

    displayData();
    localStorage.setItem("Books",JSON.stringify(WebsitesList));
}


function reseat(){
    SiteName.value="";
    siteUrl.value="";
}