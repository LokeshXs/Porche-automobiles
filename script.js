'use strict';

let additionalInformation = document.getElementById('additional-information');

let modelName = document.querySelectorAll(".model");

let cross = document.getElementById("close");

let modelImg = document.querySelector(".model-img");

let featureModelName = document.querySelector(".model-name");

let carModelSlider = document.getElementById("car-models-slider");
let imageNumber = 0;

let sliderIcon = document.querySelectorAll(".slider-icon");

let sliderModelName = document.querySelector(".slider-model-name");

let price = document.querySelector(".price");

let options = document.querySelectorAll(".option");
let discoverOptions = document.querySelectorAll('.discover-option');
let discoverText = document.querySelectorAll('.discover-text');

let selection = document.querySelector('.selection');
let selection2 = document.querySelector('.selection2');
let after1 = document.querySelector('.after1');
let after2 = document.querySelector('.after2');

let bodyVar = document.querySelector('body');

let continent = document.querySelectorAll('.continent');
let continentText = document.querySelector('.continent-text');


let countryText = document.querySelector('.country-text');
let selectionRegion = document.querySelector('.selection-region');
let asianCountries = ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India"];


let carModelSliderImages = ['media/718-slider-img.jpg', 'media/911-slider-img.jpg', 'media/taycan-slider-img.jpg', 'media/panamera-slider-img.jpg', 'media/macan-slider-img.jpg', 'media/cayenne-slider-img.jpg'];

const addRegions = function (countryText) {
  const newRegion = document.createElement('li');
  const newRegionName = document.createTextNode(countryText);
  newRegion.appendChild(newRegionName);
  newRegion.classList.add('country');
  selectionRegion.appendChild(newRegion);
};

for (let con of asianCountries) {
  addRegions(con);
}

let country = document.querySelectorAll('.country');


for (let i = 0; i < modelName.length; i++) {
  modelName[i].onmouseover = function () {
    additionalInformation.classList.remove('additional-information2');
    console.log(modelName[i]);
    switch (modelName[i].textContent) {
      case "718": {
        modelImg.src = "media/718-model-img.jpg";
        console.log("718");
        featureModelName.textContent = "718";
      }
        break;
      case "911": {
        modelImg.src = "media/911-model-img.jpg";
        console.log("911");
        featureModelName.textContent = "911";
      }
        break;
      case "Taycan": {
        modelImg.src = "media/taycan-model-img.jpg";
        console.log("Taycan");
        featureModelName.textContent = "Taycan";
      }
        break;
      case "Panamera": {
        modelImg.src = "media/Panamera-model-img.jpg";
        console.log("Panamera");
        featureModelName.textContent = "Panamera";
      }
        break;
      case "Macan": {
        modelImg.src = "media/macan-model-img.jpg";
        console.log("macan");
        featureModelName.textContent = "Macan";
      }
        break;
      case "Cayenne": {
        modelImg.src = "media/cayenne-model-img.jpg";
        console.log("cayenne");
        featureModelName.textContent = "Cayenne";
      }
        break;

    }


  }

}

cross.addEventListener('click', function () {
  additionalInformation.classList.add('additional-information2');

});

for (let i = 0; i < sliderIcon.length; i++) {

  sliderIcon[i].addEventListener('click', function () {
    console.log("i is", i);
    if (sliderIcon[i].classList.contains("back")) {
      imageNumber--;
    } else {
      imageNumber++;
    }

    if (imageNumber === -1) {
      imageNumber = 5;
    }
    if (imageNumber === 6) {
      imageNumber = 0;
    }

    carModelSlider.style.backgroundImage = `url(${carModelSliderImages[imageNumber]})`;

    switch (imageNumber) {
      case 0: {
        sliderModelName.textContent = "718";
        price.textContent = "from INR 13,669,000";
      }
        break;
      case 1: {
        sliderModelName.textContent = "911";
        price.textContent = "from INR 17,251,000";
      }
        break;
      case 2: {
        sliderModelName.textContent = "Taycan";
        price.textContent = "from INR 15,302,000";
      }
        break;
      case 3: {
        sliderModelName.textContent = "Panamera";
        price.textContent = "from INR 15,804,000";
      }
        break;
      case 4: {
        sliderModelName.textContent = "Macan";
        price.textContent = "from INR 8,321,000";
      }
        break;
      case 5: {
        sliderModelName.textContent = "Cayenne";
        price.textContent = "from INR 12,684,000";
      }
        break;

    }
  })
}

for (let i = 0; i < options.length; i++) {
  options[i].onmouseover = function () {
    options[i].style.cursor = "pointer";
    options[i].childNodes[1].style.color = "#ff0000";
  }

  options[i].onmouseout = function () {

    options[i].childNodes[1].style.color = "#fff";
  }
}

for (let i = 0; i < discoverOptions.length; i++) {
  discoverOptions[i].onmouseover = function () {
    discoverOptions[i].style.cursor = 'pointer';
    discoverOptions[i].style.color = "#ff0000";
    discoverOptions[i].style.borderBottom = '3px solid #ff0000';

  }
  discoverOptions[i].onmouseout = function () {
    discoverOptions[i].style.cursor = 'pointer';
    discoverOptions[i].style.color = "#000";
    discoverOptions[i].style.borderBottom = 'none';
  }

}

after1.addEventListener('click', function () {
  if (selection.style.display === "block") {
    selection.style.display = 'none';
  } else {
    selection.style.display = 'block';
  }
})

// Handling the hidden of display of elements on clicking outside them
window.onclick = function (event) {
  if (!event.target.matches('.after1')) {
    if (selection.style.display === 'block') {
      selection.style.display = 'none';
    }
  }

  if (!event.target.matches('.after2')) {
    if (selection2.style.display === 'block') {
      selection2.style.display = 'none';
    }
  }

  if (!event.target.matches('.additional-information')) {
    if (!additionalInformation.classList.contains('additional-information2')) {
      additionalInformation.classList.add('additional-information2');
    }
  }
}



after2.addEventListener('click', function () {
  if (selection2.style.display === "block") {
    selection2.style.display = 'none';
  } else {
    selection2.style.display = 'block';
  }
})


// Code for: when selecting a continent or country its name is reflected in search box

for (let con of continent) {

  con.addEventListener("click", function () {
    let text = con.textContent;
    continentText.textContent = text;
  });
}

for (let con of country) {
  con.addEventListener("click", function () {
    let text = con.textContent;
    countryText.textContent = text;

  });
}




