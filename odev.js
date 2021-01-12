import data from "./data.js"
import {createTableElements} from "./main.js";


document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});




const populationBigger = document.querySelector("#populationBigger")
const landAreaLess = document.querySelector("#landAreaLess")
const isPopulationLess = document.querySelector("#isPopulationLess")
const isLandBigger = document.querySelector("#isLandBigger")
const inputGroupSelect01 = document.querySelector ("#inputGroupSelect01")


let filteredPop = data;
populationBigger.addEventListener("click", () => {
    filteredPop = data.filter(eleman => {
    return eleman.population>500000    
  });
  createTableElements(filteredPop, "allcities");
});

let filteredLand = data;
landAreaLess.addEventListener("click", () => {
    filteredLand = data.filter(eleman => {
    return eleman.landArea<1000    
  });
  createTableElements(filteredLand, "allcities");
});

document.querySelector("#reset").addEventListener("click", () => {
  filteredPop = data
  filteredLand = data
});

isPopulationLess.addEventListener("click", () => {
  const less = filteredPop.some(eleman => {
    return eleman.population<100000   
  });  
  if(less){
    alert("yes")
  }else{
    alert("no")
  }
});

isLandBigger.addEventListener("click", () => {
  const bigger = filteredLand.some(eleman => {
    return eleman.landArea>100 
  });
  if(bigger){
    alert("yes")
  }else{
    alert("no")
  }
});


Array.from(inputGroupSelect01.children).forEach(option => {
  option.remove()
});


const cityNames = data.map(element => {
  return element.name
});

function attributeForOption(cityNames,root) {

  const choose = document.createElement("option")
  choose.setAttribute("value", "choose")
  choose.innerHTML= "Choose..."
  root.append(choose)

  for (let i = 0; i < cityNames.length; i++) {
    const options = document.createElement("option")

    options.setAttribute("value", i)

    options.innerHTML= cityNames[i]
    root.append(options)
  };
};
attributeForOption(cityNames, inputGroupSelect01);
 
inputGroupSelect01.addEventListener("click", (e) => {
  if(e.target.value !=="choose"){
    createTableElements([data[e.target.value]], "singlecity") 
  }
});


