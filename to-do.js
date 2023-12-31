
function addTask() {
    const inputBox = document.getElementById("input-box")
    const listContainer = document.getElementById("list-container")
    if (inputBox.value === "") {
        alert("You must write something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
    }
    inputBox.value = ""
}



/* HTML DOM Document createElement(): 
    --> The createElement() method creates an element node.

    --> Syntax: 
        document.createElement(type)

    HTML DOM Element appendChild():
    --> The appendChild() method appends a node (element) as the last child of an element.

    --> Syntax: 
        element.appendChild(node)
                or
        node.appendChild(node)

    example:

        const btn = document.createElement("button");
        btn.innerHTML = "Hello Button";
        document.body.appendChild(btn); 

    (For More refer to W3 Schools) 
*/