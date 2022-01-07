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
    data.map(({strCategory,strCategoryThumb}) => {
        let mainDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");

        p.innerText = strCategory;
        img.src = strCategoryThumb;

        imgDiv.append(img);
        mainDiv.append(imgDiv,p);
        location.append(mainDiv);

    });
}

export {getData,appendData};