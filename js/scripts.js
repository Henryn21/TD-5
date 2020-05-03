let xhr= new XMLHttpRequest();
//'https://randomuser.me/api/'
xhr.onreadystatechange= function(){
    if(this.readyState===4 && this.status === 200) {
        console.log("working");
        let data=xhr.responseType;
        
        console.log(data);
    }
    else{
        console.log("not working");
    }
};
xhr.open("GET", 'https://randomuser.me/api/', true);
xhr.send();


