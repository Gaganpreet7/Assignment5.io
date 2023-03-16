function Bigger() {
  document.getElementById("textarea").style.fontSize = "24pt";
}

function StyleChange() {
  var textarea = document.getElementById("textarea");
  var radio = document.getElementById("fancy");

  if (radio.checked) {
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
  } else {
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
  }
}

function showAlert() {
  alert("Radio button changed!");
}

function Moo() {
  var textarea = document.getElementById("textarea");
  var text = textarea.value;

  var sentences = text.split(".");

  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(" ");
    if (words.length > 1) {
      words[words.length - 1] += "-Moo";
      sentences[i] = words.join(" ");
    }
  }


  var new_text = sentences.join(".");
  
  new_text = new_text.toUpperCase();

  textarea.value = new_text;
}




