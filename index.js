
const quote = document.getElementById("quote")
fetch("http://metaphorpsum.com/sentences/7")
.then(response=> response.text())
.then(data => quote.textContent=data)
.catch(error=>console.log(error));

