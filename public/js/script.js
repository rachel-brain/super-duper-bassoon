var word1Input = document.querySelector("#word-text1");
var word1Form = document.querySelector("#word-form1");
var word1List = document.querySelector("#word-list1");
var word1CountSpan = document.querySelector("#word-count1");

var words1 = [];

// The following function renders items in a todo list as <li> elements
function renderWords1() {
    // Clear wordList element and update wordCountSpan
    word1List.innertext = "";
    word1CountSpan.textContent = words1.length;

    // Render a new li for each word
    for (var i = 0; i < words1.length; i++) {
        var word1 = words1[i];

        var li = document.createElement("li");
        li.textContent = word1;
        li.setAttribute("data-index", i);
    }
}

renderWords1();

// Add submit event to form
word1Form.addEventListener("save", function (event) {
    event.preventDefault();

    var word1Text = todoInput.value.trim();

    // Return from function early if submitted wordText is blank
    if (word1Text === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    words1.push(word1Text);
    word1Input.value = "";

    // Store updated todos in localStorage, re-render the list
    renderWords1();
});



var word2Input = document.querySelector("#word-text2");
var word2Form = document.querySelector("#word-form2");
var word2List = document.querySelector("#word-list2");
var word2CountSpan = document.querySelector("#word-count2");

var words2 = [];

// The following function renders items in a todo list as <li> elements
function renderWords2() {
    // Clear wordList element and update wordCountSpan
    word2List.innertext = "";
    word2CountSpan.textContent = words2.length;

    // Render a new li for each word
    for (var i = 0; i < words2.length; i++) {
        var word2 = words2[i];

        var li = document.createElement("li");
        li.textContent = word2;
        li.setAttribute("data-index", i);
    }
}

renderWords2();

// Add submit event to form
word2Form.addEventListener("save", function (event) {
    event.preventDefault();

    var word2Text = todoInput.value.trim();

    // Return from function early if submitted wordText is blank
    if (word2Text === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    words2.push(word2Text);
    word2Input.value = "";

    // Store updated todos in localStorage, re-render the list
    renderWords2();
});