//PSEUDOCODE:

//  1.Create welcomeModal for index.html page.  That prompts users to register/log-in or select a font, wordSet and setSize which will be used to generate a new set of magnets.  If user clicks on register/log-in button, hide selection boxes used to create magnet set, and show create account form which has users input their name, email address and password which will be stored in local storage.  It then has user select their preferred font, top 3 word sets, and  Access information entered by user in welcomeForm or based on preferences saved to local storage.  Need to create variables for wordSet, setSize and fontChoice; or create object that stores that information in key value pairs.

//2.  Write function that shuffles all items in the wordSet selected by the user and then returns the first n number of items(where n is the setSize). Store the value returned by that function in a variable called usersCurrentWordSet.  Modify createWords function so that it uses new variables instead of wordsArray as a parameter.

//Write function that positions where word magnets appear on the refrigerator door and makes them to be unevely scattered across bottom 1/3 of the screen and makes them apear to be stacked on top of each other


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function createWords(wordsArray) {
  //creates container div to compose poems
  let door= document.createElement('div');
  door.className="container";
  door.setAttribute = "droppable";
  door.style.background = "assets/refrigdoor1.jpg";
  document.body.appendChild(door);

  //for each index in the wordsArray, create a magnetDiv
  for (let i=0; i<wordsArray.length; i++) {
    let word=document.createElement('div');
        word.style.position = "absolute";
        word.style.top = getRandomInt(610, 800) +'px';
        word.style.left = getRandomInt(220, 1400) + "px";
        word.style.zIndex = getRandomInt(0, 4);
    word.className = "draggable";
    word.style.height = "30px";
    word.style.marginBottom = "5px";
    word.style.width = ((8 * wordsArray[i].length)+10) + "px";
    word.style.backgroundColor = "white";
    word.style.border = "solid 1px black";
    word.style.boxShadow = " 5px 5px 2px grey";
    word.setAttribute("draggable", "true");
    door.appendChild(word);

    //and then create and attach a paragraph element to each magnetDiv
    let para=document.createElement('p');
    para.innerHTML = wordsArray[i];
    para.style.textAlign = "center";
    para.style.paddingTop = "5px";
    para.style.marginTop = "3px";
    para.style.marginBottom = "3px";
    word.appendChild(para);
  }
};

window.onload = function makeDraggableWords() {

    //call create words function with
    createWords(originalSetArray);

    //utilize draggabilly library to make magnets draggable
      $(document).ready(function() {
        var draggableElems = document.querySelectorAll('.draggable');
        // array of Draggabillies
        var draggies = []
        // init Draggabillies
        for ( var i=0, len = draggableElems.length; i < len; i++ ) {
          var draggableElem = draggableElems[i];
          var draggie = new Draggabilly( draggableElem, {
            containment: true
          });
          draggies.push( draggie );
        }
      });

}  //closes window.onload block
