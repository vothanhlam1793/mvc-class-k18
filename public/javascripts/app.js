function updateProduct(product){
    var name = document.getElementById("productName");
    var price = document.getElementById("productPrice");
    var description = document.getElementById("productDescription");

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