async function getProducts(){
    const url = "https://jsonplaceholder.typicode.com/posts",
    response = await fetch(url);
    return await response.json();
}
async function renderProducts(){
    const products = await getProducts(),
    tbody = document.querySelector('tbody');
    for(let product of products){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.body}</td>`;
        tbody.append(row);
    }
}

renderProducts()