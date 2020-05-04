//AJAX API
let xhr= new XMLHttpRequest();
//'https://randomuser.me/api/'
xhr.onreadystatechange= function(){//when state of xhr changes
    if(this.readyState===4 && this.status === 200) {
        console.log("done");
        let data=JSON.parse(xhr.responseText);
        console.log(data);
        console.log(data.results);
        console.log(data.results.length);
        console.log(data.results[0].gender);
        let list=[];
        for(let i =0;i<data.results.lenth;i++){
            list[i]=results[i];
        }
        console.log(list);
    }
    else{
        console.log("not done");
    }
};
xhr.open("GET", 'https://randomuser.me/api/?format=json', true);
xhr.send();

//using fetch instead(not necessary)
// fetch('https://randomuser.me/api/?format=json')
//     .then(response=> response.json())
//     .then(console.log(response));
    