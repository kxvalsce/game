let balanceText = document.querySelector(".balance__text");
let productBuy = document.querySelectorAll(".product__buy");
let yachejki = document.querySelector(".yachejki");
let price = 0;
let categoryButtons = document.querySelectorAll(".category-btn");
let column = 20;
let row = 15;
let balance = localStorage.getItem("balance") || 2500;
localStorage.setItem("balance", balance);
balanceText.textContent = balance;
let elements = JSON.parse(localStorage.getItem("elements")) || [];
let buyElement = "";









document.body.addEventListener ('keydown',function (e) {
  if (e.code == 'Escape') {
    location.href = 'menu.html'
  }
})








let a = [50 ,70, 80]


a.push(80)

for (let i = 0; i < column * row; i++) {
  // 300 raz
  let yachejka = document.createElement("div");
  yachejka.classList.add("yachejka");
  yachejki.append(yachejka);

  yachejka.addEventListener("click", function () {




    if (buyElement == '') {
      return
    }

    if (buyElement == 'melon' || buyElement ==  'corn' ) {
      if (!yachejka.classList.contains('ground')) {

        return
      }



    }


    if (balanceText.textContent >= price) {

    if (buyElement == 'melon' || buyElement ==  'corn' ) {
      yachejka.style.background = "url(img/" + buyElement + ".png), url(img/ground.png)";
    }

    else {
      yachejka.style.background = "url(img/" + buyElement + ".png)";
    }

      yachejka.classList.add (buyElement)
      yachejka.style.backgroundSize = "100%";
      yachejka.style.backgroundRepeat = "no-repeat";
      elements.push({
        number: i,
        url: "url(img/" + buyElement + ".png)",
        buyElement: buyElement,
      });

      balanceText.textContent -= price;
      localStorage.setItem("balance", balanceText.textContent);
      localStorage.setItem("elements", JSON.stringify(elements));

   

      if (buyElement == "shop1") {
        setInterval(function () {
          balanceText.textContent = (Number(balanceText.textContent) + 1).toFixed(1);
          localStorage.setItem("balance", balanceText.textContent);
        }, 5000);
      }

      if (buyElement == "melon") {
        setInterval(function () {
          balanceText.textContent = (Number(balanceText.textContent) + 0.2).toFixed(1);
          localStorage.setItem("balance", balanceText.textContent);
        }, 5000);
      }

      if (buyElement == "corn") {
        setInterval(function () {
          balanceText.textContent = (Number(balanceText.textContent) + 0.1).toFixed(1);
          localStorage.setItem("balance", balanceText.textContent);
        }, 5000);
      }


      if (buyElement == "ground") {
        
      }



      if (buyElement == "house") {
        setInterval(function () {
          balanceText.textContent = (Number(balanceText.textContent) + 5).toFixed(1);
          localStorage.setItem("balance", balanceText.textContent);
        }, 5000);
      }
    } else {
      alert("Not enough coins");
    }
  });
}




function show () {
  for (let i = 0; i < elements.length; i++ )  {
    let yachejka = document.querySelectorAll ('.yachejka')[elements[i].number]

  yachejka.style.background = elements[i].url;
  yachejka.style.backgroundSize = "100%";
  yachejka.style.backgroundRepeat = "no-repeat";

  if (elements[i].buyElement == "shop1") {
    setInterval(function () {
      balanceText.textContent = Number(balanceText.textContent) + 1;
      localStorage.setItem("balance", balanceText.textContent);
    }, 5000);
  }

  if (elements[i].buyElement == "house") {
    setInterval(function () {
      balanceText.textContent = Number(balanceText.textContent) + 5;
      localStorage.setItem("balance", balanceText.textContent);
    }, 5000);
  }


  }
}

show()



function deleteClass() {
  for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].classList.remove("active");
  }
}

for (let i = 0; i < categoryButtons.length; i++) {
  categoryButtons[i].addEventListener("click", function () {
    deleteClass();
    categoryButtons[i].classList.add("active");
  });
}

for (let i = 0; i < productBuy.length; i++) {
  // 300 raz

  productBuy[i].addEventListener("click", function () {
    buyElement = productBuy[i].dataset.product;
    price = +productBuy[i].textContent
  });
}

let resetBtn = document.querySelector(".reset__btn");

resetBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

let closeLogin = document.querySelector(".close-button");
let login = document.querySelector(".login");

closeLogin.addEventListener("click", function () {
  login.remove();
});

// JSON.stringify(elements)
// [4, 7] -> '[4, 7]'

// JSON.parse()
//  '[4, 7]' -> [4, 7]

let colors = ["green", "blue"];

colors.push("yellow");










if (5 == 5){
  console.log ('Hello')
}


let button = document.querySelector ('.btn')

button.addEventListener ('click', function () {
  button.classList.add ('disabled')
})





if (3 != 5) {

}





button.addEventListener ('click', function () {
  button.classList.add ('active')
})
