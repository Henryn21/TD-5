let xhr= new XMLHttpRequest();
//'https://randomuser.me/api/'
xhr.onreadystatechange= function(){
    if(this.readyState===4 && this.status === 200) {
        console.log("working");
        console.log(data);
    }
};
xhr.open("GET", 'https://randomuser.me/api/', true);
xhr.send();
let data=xhr.responseText;

