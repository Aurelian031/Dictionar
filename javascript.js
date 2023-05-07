let savedWords = [];
function saveWord() {
    let word = document.getElementById("word").value;
    savedWords.push(word);
    document.getElementById("word").value = "";
}
function searchWord() {
    
    let searchInput = document.getElementById("search");
    let searchMessage = document.getElementById("Search-message");
    searchMessage.innerText = "";
    if (savedWords.includes(searchInput.value)) {
        searchMessage .innerText = "The word is in the dictionary.";
    } else {
        searchMessage.innerText = "The word is not in the dictionary.";
  }
  document.getElementById("search").value = "";
}
