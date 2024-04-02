function updateProduct(product){
    var name = document.getElementById("productName");
    var price = document.getElementById("productPrice");
    var description = document.getElementById("productDescription");
    var productId = document.getElementById("productId");

    productId.innerHTML = product._id;
    name.innerHTML = product.name;
    price.innerHTML = "Giá: " + product.price;
    description.innerHTML = product.description;
}


function getProduct(id){

    // B1 - Khai bao AJAX JS
    const xhttp = new XMLHttpRequest();

    // B2 - Cai dat LOAD - Khi ket qua tra ve
    // RESPONSE
    xhttp.onload = function(){
        var product = {};
        try {
            product = JSON.parse(xhttp.responseText);
        } catch (error) {
            product = {
                name: "Product not found",
                price: 0,
                description: "Description not found"
            };
        }

        // Mutate DOM
        updateProduct(product);
    }

    // B3 - Goi AJAX
    xhttp.open("GET", "/product/" + id, true);
    xhttp.send();

}

function deleteProduct(){
    var id = document.getElementById("productId").innerHTML;
    console.log("DELETE: ", id);
    // B1 - Khai bao AJAX JS
    const xhttp = new XMLHttpRequest();

    // B2 - Cai dat LOAD - Khi ket qua tra ve
    // RESPONSE
    xhttp.onload = function(){
        var result = JSON.parse(xhttp.responseText);
        console.log(result);
        location.reload();
    }

    // B3 - Goi AJAX
    xhttp.open("DELETE", "/product/" + id, true);
    xhttp.send();
}

function addProduct(){
    var name = document.getElementById("productNameInput").value;
    var price = parseInt(document.getElementById("productPriceInput").value);
    var description = document.getElementById("productDescriptionInput").value;

    var product = {
        name: name,
        price: price,
        description: description
    }

    // B1 - Khai bao AJAX JS
    const xhttp = new XMLHttpRequest();

    // B2 - Cai dat LOAD - Khi ket qua tra ve
    // RESPONSE
    xhttp.onload = function(){
        var result = JSON.parse(xhttp.responseText);
        console.log(result);
        location.reload();
    }

    // B3 - Goi AJAX
    xhttp.open("POST", "/product", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(product));
}


function updateProductDB(){
    var name = document.getElementById("productNameInput").value;
    var price = parseInt(document.getElementById("productPriceInput").value);
    var description = document.getElementById("productDescriptionInput").value;
    var id = document.getElementById("productId").innerHTML;

    var product = {
        name: name,
        price: price,
        description: description
    }
    // B1 - Khai bao AJAX JS
    const xhttp = new XMLHttpRequest();

    // B2 - Cai dat LOAD - Khi ket qua tra ve
    // RESPONSE
    xhttp.onload = function(){
        var result = JSON.parse(xhttp.responseText);
        console.log(result);
        location.reload();
    }

    // B3 - Goi AJAX
    xhttp.open("POST", "/product/" + id, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(product));
}