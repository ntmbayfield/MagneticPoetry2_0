function createWords(wordsArray) {
  //creates container div to compose poems
  let door= document.createElement('div');
  door.className="container";
  door.setAttribute = "droppable";
  door.style.background = "assets/refrigdoor1.jpg";
  document.body.appendChild(door);

  //creates a draggable magnet element
  for (let i=0; i<wordsArray.length; i++) {
    let word=document.createElement('div');
    word.className = "draggable";
    word.style.height = "30px";
    word.style.marginBottom = "5px";
    word.style.width = ((8 * wordsArray[i].length)+10) + "px";
    word.style.backgroundColor = "white";
    word.style.border = "solid 1px black";
    word.style.boxShadow = " 5px 5px 2px grey";
    word.setAttribute("draggable", "true");
    door.appendChild(word);

    //puts a word on the magnet
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
//  var wordsArr1 = ["the", "I", "me", "code", "now", "white", "black", "exasperating", "try", "love", "command", "mindset", "growth", "iterate", "diversity", "mental", "models", "success"];
var originalSetArray = ["&", "&", "a", "a", "a", "a", "a", "a", "about", "above", "ache", "ad", "after", "all", "am", "am", "an", "an", "and", "and", "and", "and", "and", "apparatus", "are", "are", "arm", "as", "as", "as", "as", "ask", "at", "at", "at", "away", "bare", "be", "beat", "beauty", "bed", "beneath", "bitter", "black", "blood", "blow", "blue", "boil", "boy", "breast", "but", "but", "but", "but", "butt", "by", "by", "can", "chant", "chocolate", "cool", "could", "crush", "cry", "d", "day", "death", "delirious", "diamond", "did", "do", "do", "dream", "dress", "drive", "drool", "drunk", "eat", "ed", "ed", "ed", "ed", "egg", "elaborate", "enormous", "er", "es", "est", "fast", "feet", "fiddle", "finger", "fluff", "for", "forest", "frantic", "friend", "from", "from", "garden", "girl", "go", "goddess", "gorgeous", "gown", "hair", "has", "have", "have", "he", "he", "head", "heave", "her", "her", "here", "him", "his", "his", "honey", "hot", "how", "I", "I", "I", "I", "if", "in", "in", "in", "ing", "ing", "ing", "ing", "ing", "is", "is", "is", "is", "is", "it", "it", "it", "juice", "lake", "language", "languid", "lather", "lazy", "less", "let", "lick", "lie", "life", "light", "like", "like", "like", "live", "love", "luscious", "lust", "ly", "ly", "ly", "ly", "mad", "man", "me", "me", "me", "mean", "meat", "men", "milk", "mist", "moan", "moon", "mother", "music", "must", "my", "my", "my", "need", "never", "no", "no", "no","not", "not", "of", "of", "of", "of", "on", "on", "one", "or", "our", "over", "pant", "peach", "petal", "picture", "pink", "play", "please", "pole", "pound", "puppy", "purple", "put", "r", "r", "rain", "raw", "recall", "red", "repulsive", "rip", "rock", "rose", "run", "rust", "s", "s", "s", "s", "s", "s", "sad", "said", "sausage", "say", "scream", "sea", "see", "shadow", "she", "she", "shine", "ship", "shot", "show", "sing", "sit", "skin", "sky", "sleep", "smear", "smell", "smooth", "so", "soar", "some", "sordid", "spray", "spring", "still", "stop", "storm", "suit", "summer", "sun", "sweat", "sweet", "swim", "symphony", "the", "the", "the", "their", "there", "these", "they", "those", "though", "thousand", "through", "time", "tiny", "to", "to", "together", "tongue", "trudge", "TV", "ugly", "up", "urge", "us", "use", "want", "want", "was", "watch", "water", "wax", "we", "we", "were", "what", "when", "whisper", "who", "why", "will", "wind", "with", "with", "woman", "worship", "y", "y", "yet", "you", "you", "you"];


//  createWords(wordsArr1);
createWords(originalSetArray);

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

}
