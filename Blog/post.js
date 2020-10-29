function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {

    // Retrieving the values of form elements 
    var name = document.Post.name.value;
    var message= document.Post.message.value;
    //var img=document.getElementById("img");
    var nameErr = messErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(message.length==0){
        printError("messErr", "Please enter a message");
    }
    else{
        printError("messErr","");
        messErr = false;

    }

    if (nameErr || messErr  == true) {
        return false;
    } else {
        alert('You have submitted the form..');
        post(name,message);
    }
}
function post(name,message){
    var card = document.createElement('div');
    card.className="card mb-4";
    //var img=document.createElement('img');
    //img.className="card-img-top";
    var cardbody=document.createElement('div');
    cardbody.className="card-body";
    var cardheader=document.createElement('h2');
    cardheader.innerHTML=name;
    cardheader.className="card-title";
    var article=document.createElement('p');
    article.innerHTML=message;
    cardbody.appendChild(cardheader);
    cardbody.appendChild(article);
    //card.appendChild(img);
    card.appendChild(cardbody);
    document.getElementsByClassName("col-md-8").appendChild(card);
}