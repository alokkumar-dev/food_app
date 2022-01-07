async function getData(url){
 
    try{
        let response = await fetch(url);
        let data = await response.json();
        return data;
        console.log(data);
    }
    catch(err){
        console.log("Error from catch :", err);
    }
}

function appendData(data,location){
    data.map(({strCategory,strCategoryThumb,strMeal}) => {  
        let mainDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");

        let receObj ={
            strMealThumb : strCategoryThumb,
            strCategory:  strCategory,
            strMeal :  strMeal
        }

        mainDiv.addEventListener("click",() =>{
            sendRecp(receObj);
        })
        p.innerText = strCategory;
        img.src = strCategoryThumb;

        imgDiv.append(img);
        mainDiv.append(imgDiv,p);
        location.append(mainDiv);

    });
}
function sendRecp(data){
   localStorage.setItem("foodRecipes", JSON.stringify(data));
   window.location.href = "./showRecipes.html";
}

export {getData,appendData};