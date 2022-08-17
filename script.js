//answer of 1
var object1={
        name:"Person 1",
        age:5
}
var object1={
        age:5,
        name:"Person 1",
        
}



JSON.stringify(object1) === JSON.stringify(object2)
// false
    
_.isEqual(object1, object2)
// true


//answer of 2 and 3
let xhr=new XMLHttpRequest();

xhr.open('GET',"https://restcountries.com/v3.1/all");
xhr.onload=function(){
        console.log("******Response Received****");
        let data=JSON.parse(xhr.responseText)
        

for(let i=0;i<data.length;i++){
        console.log(
        `
        Name:${data[i].name}
        Flag:${data[i].flag}
        Region:${data[i].region}
        Sub-Region:${data[i].subregion}
        Population:${data[i].population}
        `)
}
}
        
xhr.send();
