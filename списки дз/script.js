/*let input= document.querySelector("input");
let ul = document.querySelector("ul");

input.onkeypress = function () {
 if (event.keyCode===13) {
 let li = document.createElement("li");
 let span = document.createElement("span");
 let img = document.createElement("img");
span.innerHTML =input.value;
img.setAttribute("src", "icons.png");

 li.appendChild(img);
 li.appendChild(span);


 ul.appendChild(li);
 input.value="";
}
};

ul.onclick=function (event) {
let target = event.target;

if (target.tagName === "li" || target.tagName == "span") {
    target.classList.toggle('checked');
} else if (target.tagName === "IMG") {
        target.parentElement.remove();
     }
};
document.querySelector(".clear").onclick = function () {
    ul.innerHTML = "";
    };

  
 /*   document.querySelector(".finish").onclick = function () {
        let els = ul.querySelectorAll("li");
        for (let i = 0; i < els.length; i = i + 1) {
          els[i].classList.add("checked");
        }
      };
      
document.querySelector(".finish").onclick = function () {
  let els = ul.querySelectorAll("li");
  for (let i = 0; i < els.length; i = i + 1) {
    els[i].classList.add("checked");
  }
};*/
let input = document.querySelector("input");
let ul = document.querySelector("ul");

input.onkeypress = function () {
  if (event.keyCode === 13) {
    let  li = document.createElement("li");
    let span = document.createElement("span");
    let img = document.createElement("img");
    span.innerHTML = input.value;
    img.setAttribute("src", "icons.img");
    
    li.appendChild(img);
    li.appendChild(span);
    
    ul.appendChild(li);
    input.value = "";
  }
};


ul.onclick = function (event) {
  let target = event.target;
  //ДЗ3
  if (target.tagName === "LI" || target.tagName == "SPAN") {
    target.classList.toggle('checked');
  //Конец ДЗ3
  } else if (target.tagName === "IMG") {
    target.parentElement.remove();
  }
};

//ДЗ2
document.querySelector(".clear").onclick = function () {
  ul.innerHTML = "";
};
//Конец ДЗ2

document.querySelector(".finish").onclick = function () {
  let els = ul.querySelectorAll("li");
  for (let i = 0; i < els.length; i = i + 1) {
    els[i].classList.add("checked");
  }
};
