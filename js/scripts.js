//AJAX API
let xhr= new XMLHttpRequest();
//'https://randomuser.me/api/'
xhr.onreadystatechange= function(){//when state of xhr changes
    if(this.readyState===4 && this.status === 200) {
        console.log("working");
        let data=JSON.parse(xhr.responseText);
        console.log(data);
        console.log(data.results.gender);
    }
    else{
        console.log("not working");
    }
};
xhr.open("GET", 'https://randomuser.me/api/', true);
xhr.send();


