var ajax = new Ajax();
ajax.post("userCtrl.php",{
    "request":"getAll"
}).then(r => {
    var test = r;
    // console.log(test);
    test.forEach(user => {
        // console.log(user);
        var row = document.createElement("tr");
        // row.addClass("removable");
        var firstTd = document.createElement("td");
        firstTd.innerText = user.id;
        var secondTd = document.createElement("td");
        secondTd.innerText = user.login;
        row.appendChild(firstTd);
        row.appendChild(secondTd);
        var table = document.getElementById("userTable");
        table.appendChild(row);
    })
});

var searchInput = document.getElementById("search");
searchInput.addEventListener("keyup",function(data){
    var table = document.getElementById("userTable");
    for(var i = 1; i < table.children.length; i++){
        if(searchInput.value != "" && !table.children[i].children[1].innerText.toUpperCase().includes(searchInput.value.toUpperCase())){
            table.children[i].style.display = "none";
        } else {
            table.children[i].style.display = "table-row";
        }
    }
});

var add = document.getElementById("addUser");
var addButton = document.getElementById("addUserButton");
addButton.addEventListener("click", function(){
    ajax.post("userCtrl.php",{
        "request":"add",
        "login":add.value
    }).then(r => {
        console.log(r);
        var table = document.getElementById("userTable");
        table.innerHTML = "<tr><th>ID</th><th>LOGIN</th></tr>";
        ajax.post("userCtrl.php",{
            "request":"getAll"
        }).then(r => {
            var test = r;
            // console.log(test);
            test.forEach(user => {
                // console.log(user);
                var row = document.createElement("tr");
                // row.addClass("removable");
                var firstTd = document.createElement("td");
                firstTd.innerText = user.id;
                var secondTd = document.createElement("td");
                secondTd.innerText = user.login;
                row.appendChild(firstTd);
                row.appendChild(secondTd);
                var table = document.getElementById("userTable");
                table.appendChild(row);
            })
        });
    });
});

document.addEventListener("DOMContentLoaded",function(){
    // document.getElementById('newBody').innerHTML = TemplateEngine(document.documentElement.innerHTML, {  
    //     skills : ['js','css','php']
    // });
    // console.log( TemplateEngine("<input type='text' id='search' placeholder='Search for user' /><br><table border='' id='userTable'><tr class='notRemovable'><th>ID</th><th>LOGIN</th></tr><% this.skills.join(' ') %></table>", {  
    //     skills : ['js','css','php']
    // }));
})