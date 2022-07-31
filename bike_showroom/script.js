let bike_list=[],x=0
function bikeInsert(bike_list){
    style=["h1","h2","h3","p"];
    for (;x<bike_list.length;x++)
    {
        let values="";
        let styInc=0;
        for(let y in bike_list[x]){
            values+="<"+style[styInc]+">"+bike_list[x][y]+"</"+style[styInc]+">";
            console.log(bike_list[x][y])
            styInc++;
        }
        document.getElementById("bike_details").innerHTML+="<div id=\"bikes\">"+values+"</div>"
    }
}
if (bike_list==null){
    localStorage.removeItem("bike_list");
    localStorage.setItem("bike_list",JSON.stringify([{brand:"TVS",model:"Jupiter",rating:"3.5",price:"80000"}]));
    bike_list=JSON.parse(localStorage.getItem("bike_list"));
}
bike_list=JSON.parse(localStorage.getItem("bike_list"));
window.onload=bikeInsert(bike_list);

function createBike(brand,model,rating,price){
    this.brand=brand;
    this.model=model;
    this.rating=rating;
    this.price=price;
}

// function bikeSearch(){
//     for (;i<bike_list.length;i++)
//     {
//         let values="";
//         let styInc=0;
//         for(let y in bike_list[x]){
//             values+="<"+style[styInc]+">"+bike_list[x][y]+"</"+style[styInc]+">";
//             console.log(bike_list[x][y])
//             styInc++;
//         }
//         document.getElementById("bike_details").innerHTML+="<div id=\"bikes\">"+values+"</div>"
//     }  

// }



function addBike(){
    let brand,model,price,rating;
    brand=document.getElementById("brand").value;
    model=document.getElementById("model").value;
    rating=document.getElementById("rating").value;
    price=document.getElementById("price").value;
    let new_bike= new createBike(brand,model,rating,price);
    bike_list.push(new_bike);
    bikeInsert(bike_list)
    localStorage.setItem("bike_list",JSON.stringify(bike_list))
}