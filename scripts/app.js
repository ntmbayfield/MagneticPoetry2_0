let galvanizeWordSet = ["iterate", "react", "express", "syntax", "embrace", "confusion", "cohort", "meditate", "check-in", "stand-down", "imposter", "diffused", "thinking", "jumpstart", "dry", "mvp", "quarter", "immersive", "web", "development", "data", "science", "portfolio", "learn", "ask", "feedback", "pair", "programming", "syndrome", "database", "agile", "RESTful", "full-stack", "get", "put", "post", "update", "closure", "function", "declare", "breakout", "pods", "culture", "XCC", "engineer", "tech", "emotional", "empathy", "network", "software", "capstone", "variable", "assign", "initialize", "property", "object", "behavior", "method", "slack", "co-working", "mentor", "project", "whiteboard", "deploy", "scope", "block", "call", "anonymous", "global", "local", "document", "local", "expression", "curly", "brace", "s", "s", "the", "the", "a", "a", "an", "and", "statement", "pseudo", "code", "comment", "semantics", "atom", "library", "framework", "branch", "merge", "conflict", "commit", "inital", "message", "element", "style", "pull", "request", "remote", "master", "origin", "remote", "local", "community", "pomodoro", "version", "control", "front", "back", "end", "index", "application", "scripts", "assets", "if", "else", "return", "mastery", "event", "object", "condition", "command", "line", "model", "view", "controller", "data", "store", "attribute", "background", "transferable", "skills", "pivot", "elevator", "pitch", "interview", "bootcamp", "deploy", "surge", "folder", "on", "click", "handle", "r", "er", "mouse", "event", "bug", "accountability", "group", "collaborate", "test", "driven", "feature", "cat", "driver", "navigator", "embrace", "confusion", "listen", "er", "unit", "product", "scrum", "express", "react", "data", "store", "recursion", "for", "loop", "while", "key", "value", "pair", "form", "button", "grid", "row", "responsive", "canvas", "gradient", "fork", "clone", "the", "crazy88s", "Gulls", "78", "88", "Galvanize", "undefined", "error", "console", "keyboard", "shortcut", "productivity", "time", "box", "ing", "ing", "ed", "split", "string", "array", "null", "Nan", "type", "of", "up", "down", "hover", "blur", "input", "prompt", "bootstrap", "cascade", "status", "code", "server", "client", "repo", "stack", "overflow", "api", "simon", "mocha", "chai", "speakeasy", "atrium", "layout", "fat", "arrow", "query", "selector", "id", "class", "name", "locker", "kitchen", "survey", "retrospective", "actionable", "specific", "kind", "interpreter", "language", "lower", "submit", "theater", "delores park", "gandolf", "generator", "node", "browser", "dynamic", "ally", "generate", "one", "on", "one", "reference", "on", "out", "off", "over", "alert", "toy", "problem", "s", "interface", "schedule", "checkpoint", "skill", "mastery", "performance", "tardy", "excused", "absence", "debug", "parse", "request", "response", "growth", "mindset", "fixed", "neuroplasticity", "git", "anti-fragile", "admission", "pivot", "career", "transition", "experience", "condition", "do", "while", "diagram", "solution", "solve", "puzzle", "machine", "language", "binary", "bootstrap", "materialize", "get", "set", "dynamic", "ally", "created", "DOM", "image", "source", "background", "technical", "challenge", "fizz", "buzz", "you don't know", "java", "script", "go", "C++", "hyper", "text", "mark", "up", "router", "deliverables", "user", "browser", "mobile", "web", "domain", "name", "state", "map", "filter", "each", "split", "join", "push", "pop", "shift", "unshift", "slice", "splice", "index", "reverse", "nest", "ed", "balance", "eat", "sleep", "exhaustion", "rollercoaster", "up", "down", "package", "npm", "dependency", "host", "ed", "cloud", "crypto", "currency", "hackathon", "open", "source", "contribute", "victory", "intern", "user", "design", "interaction", "usability", "search", "engine", "optimization", "body", "head", "div", "row", "column", "contain", "cover", "inherit", "float", "text", "align", "justify", "center", "right", "left", "font", "menu", "load", "append", "child", "descendant", "parent", "prepend", "let", "indent", "blocker", "sprint", "trello", "44", "tehama", "soma", "instructor", "expert", "tab", "pixel", "art", "maker", "exercise", "demonstrate", "google", "amazon", "twitch", "linked", "in", "311", "masha", "expected", "actual", "random", "sort", "shuffle", "reduce", "true", "false", "boolean", "bot", "chatbot", "adjacent", "howard", "brech-in", "buzz", "feed", "quiz", "js", "fiddle", "lint", "list", "un", "order", "ed", "open", "close", "ing", "tag", "=", ";", "senior", "junior", "recruit", "demo", "template", "link", "head", "foot", "aside", "block", "npm", "install", "start-up", "stock", "options", "radio", "release", "soma", "segway", "soft", "lounge", "hack", "lecture", "wire", "frame", "mockup", "toggle", "heading", "blog", "team", "adobe", "spark", "algorithm", "AI", "scrub", "event", "fire", "manipulate", "public", "private", "interface", "watson", "medium", "nav", "theme", "save", "update", "upload", "add", "host", "online", "save", "network", "waterfall", "trace", "execute", "inner", "critic", "perfect", "ion", "ist", "I", "me", "we", "partner", "his", "mine", "her", "she", "he", "team", "colleague", "encapsulate", "hide", "gamify", "noise", "cancel", "headphones", "follow", "job", "rejection", "platform", "curriculum"];

let originalWordSet = ["&", "&", "a", "a", "a", "a", "a", "a", "about", "above", "ache", "ad", "after", "all", "am", "am", "an", "an", "and", "and", "and", "and", "and", "apparatus", "are", "are", "arm", "as", "as", "as", "as", "ask", "at", "at", "at", "away", "bare", "be", "beat", "beauty", "bed", "beneath", "bitter", "black", "blood", "blow", "blue", "boil", "boy", "breast", "but", "but", "but", "but", "butt", "by", "by", "can", "chant", "chocolate", "cool", "could", "crush", "cry", "d", "day", "death", "delirious", "diamond", "did", "do", "do", "dream", "dress", "drive", "drool", "drunk", "eat", "ed", "ed", "ed", "ed", "egg", "elaborate", "enormous", "er", "es", "est", "fast", "feet", "fiddle", "finger", "fluff", "for", "forest", "frantic", "friend", "from", "from", "garden", "girl", "go", "goddess", "gorgeous", "gown", "hair", "has", "have", "have", "he", "he", "head", "heave", "her", "her", "here", "him", "his", "his", "honey", "hot", "how", "I", "I", "I", "I", "if", "in", "in", "in", "ing", "ing", "ing", "ing", "ing", "is", "is", "is", "is", "is", "it", "it", "it", "juice", "lake", "language", "languid", "lather", "lazy", "less", "let", "lick", "lie", "life", "light", "like", "like", "like", "live", "love", "luscious", "lust", "ly", "ly", "ly", "ly", "mad", "man", "me", "me", "me", "mean", "meat", "men", "milk", "mist", "moan", "moon", "mother", "music", "must", "my", "my", "my", "need", "never", "no", "no", "no","not", "not", "of", "of", "of", "of", "on", "on", "one", "or", "our", "over", "pant", "peach", "petal", "picture", "pink", "play", "please", "pole", "pound", "puppy", "purple", "put", "r", "r", "rain", "raw", "recall", "red", "repulsive", "rip", "rock", "rose", "run", "rust", "s", "s", "s", "s", "s", "s", "sad", "said", "sausage", "say", "scream", "sea", "see", "shadow", "she", "she", "shine", "ship", "shot", "show", "sing", "sit", "skin", "sky", "sleep", "smear", "smell", "smooth", "so", "soar", "some", "sordid", "spray", "spring", "still", "stop", "storm", "suit", "summer", "sun", "sweat", "sweet", "swim", "symphony", "the", "the", "the", "their", "there", "these", "they", "those", "though", "thousand", "through", "time", "tiny", "to", "to", "together", "tongue", "trudge", "TV", "ugly", "up", "urge", "us", "use", "want", "want", "was", "watch", "water", "wax", "we", "we", "were", "what", "when", "whisper", "who", "why", "will", "wind", "with", "with", "woman", "worship", "y", "y", "yet", "you", "you", "you"];


let wordList = galvanizeWordSet;
let setSize = 30;
let fontChoice = "Inconsolata";
let removed = [];



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//wrote this shuffle function for lodash exercise
function shuffle(array) {
  let numbers = [];
  let unshuffledArray =[];
  //for each index in the array, generate a random number and push it to the "numbers" array
  for (let i=0; i<array.length; i++) {
    numbers.push(Math.random());
  }
  for (let i=0; i<array.length; i++) {
    let randomlyTaggedElement = [];
    randomlyTaggedElement.push(array[i]);
    randomlyTaggedElement.push(numbers[i]);
    unshuffledArray.push(randomlyTaggedElement);
  }
  let sortedArray = unshuffledArray.sort(function(a, b) {
    return a[1] - b[1];
  });
  let shuffledArray = [];
  for (let i = 0; i < sortedArray.length; i++) {
    shuffledArray.push(sortedArray[i][0]);
  }
  return shuffledArray;
}

function createRefrigDoorAndDefaultWordSet() {
  //creates container div to compose poems on
  let door= document.createElement('div');
  door.id="container";
  door.setAttribute = "droppable";
  door.style.background = "assets/refrigdoor1.jpg";
  document.body.appendChild(door);

  //for each index in the wordsArray, create a magnetDiv
  let randomizedArray = shuffle(galvanizeWordSet);
  removed = randomizedArray.splice(0, 60);
  for (let i=0; i<removed.length; i++) {
    let word=document.createElement('div');
        word.style.position = "absolute";
        word.style.top = getRandomInt(610, 800) +'px';
        word.style.left = getRandomInt(220, 1400) + "px";
        word.style.zIndex = getRandomInt(0, 4);
    word.className = "draggable";
    word.style.height = "30px";
    word.style.marginBottom = "5px";
    word.style.width = ((8 * removed[i].length)+10) + "px";
    word.style.backgroundColor = "white";
    word.style.border = "solid 1px black";
    word.style.boxShadow = " 5px 5px 2px grey";
    word.setAttribute("draggable", "true");
    door.appendChild(word);

    //and then create and attach a paragraph element to each magnetDiv
    let para=document.createElement('p');
    para.innerHTML = removed[i];
    para.style.fontFamily = "Indie Flower";
    para.style.textAlign = "center";
    para.style.paddingTop = "5px";
    para.style.marginTop = "3px";
    para.style.marginBottom = "3px";
    word.appendChild(para);
  }
};

function createNewMagnetSet(wordLi, size, fontSelection) {
  let randomizedArray = shuffle(wordLi);
  removed = randomizedArray.splice(0, size);
  for (let i=0; i<removed.length; i++) {
    let word=document.createElement('div');
        word.style.position = "absolute";
        word.style.top = getRandomInt(610, 800) +'px';
        word.style.left = getRandomInt(220, 1400) + "px";
        word.style.zIndex = getRandomInt(0, 4);
    word.className = "draggable";
    word.style.height = "30px";
    word.style.marginBottom = "5px";
    word.style.width = ((8 * removed[i].length)+10) + "px";
    word.style.backgroundColor = "white";
    word.style.border = "solid 1px black";
    word.style.boxShadow = " 5px 5px 2px grey";
    word.setAttribute("draggable", "true");
    let rDoor = document.querySelector("#container");
    rDoor.appendChild(word);
    //and then create and attach a paragraph element to each magnetDiv
    let para=document.createElement('p');
    para.innerHTML = removed[i];
    para.style.textAlign = "center";
    para.style.fontFamily = fontSelection;
    para.style.paddingTop = "5px";
    para.style.marginTop = "3px";
    para.style.marginBottom = "3px";
    word.appendChild(para);
    }
    (function() {
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
    })();
  };



window.onload = function makeDraggableWords() {

    createRefrigDoorAndDefaultWordSet();

    $("#chooseGalvanize").on('click', function() {
      wordList = galvanizeWordSet;
      console.log("wordList is now ", wordList);
    });

    $("#chooseOriginal").on('click', function() {
      wordList = originalWordSet;
      console.log("wordList is now", wordList);
    });

    $("#choose30").on('click', function() {
      setSize = 30;
      console.log("setSize is now ", setSize);
    });

    $("#choose60").on('click', function() {
      setSize = 60;
      console.log("setSize is now", setSize);
    });

    $("#fontStandard").on('click', function() {
      fontChoice = "Inconsolata";
      console.log("font for magnets is now ", fontChoice);
    });

    $("#fontFun").on('click', function() {
      fontChoice = "Indie Flower";
      console.log("font for magnets is now", fontChoice);
    });

    $("#makeNewSet").on('click', function() {
      createNewMagnetSet(wordList, setSize, fontChoice);
      console.log("new word set is ", removed);
    });

    $("#reset").on('click', function() {
      $(".draggable").remove();
      console.log("reset button was clicked");
    });


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
