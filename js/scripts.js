//AJAX API
let xhr= new XMLHttpRequest();
//'https://randomuser.me/api/'
xhr.onreadystatechange= function(){//when state of xhr changes
    if(this.readyState===4 && this.status === 200) {
        console.log("done");
        let data=JSON.parse(xhr.responseText);
        console.log(data);
        console.log(data.results);
        console.log(data.results[0]);
        console.log(data.results[0].gender);
    }
    else{
        console.log("not done");
    }
};
xhr.open("GET", 'https://randomuser.me/api/?format=json', true);
xhr.send();


