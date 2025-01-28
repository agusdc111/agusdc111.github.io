document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const categoriesDiv = document.getElementById('categories');
            let totalAmount = 0;

            for (const category in data) {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category';

                const categoryTitle = document.createElement('h2');
                categoryTitle.textContent = category;
                categoryDiv.appendChild(categoryTitle);

                data[category].forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product';

                    const productLabel = document.createElement('label');
                    productLabel.textContent = `${product[0]} - $${product[1]}`;
                    productDiv.appendChild(productLabel);

                    const productInput = document.createElement('input');
                    productInput.type = 'number';
                    productInput.min = '0';
                    productInput.value = '0';
                    productInput.addEventListener('input', () => {
                        updateTotal();
                    });
                    productDiv.appendChild(productInput);

                    categoryDiv.appendChild(productDiv);
                });

                categoriesDiv.appendChild(categoryDiv);
            }

            function updateTotal() {
                totalAmount = 0;
                const products = document.querySelectorAll('.product');
                products.forEach(product => {
                    const price = parseInt(product.querySelector('label').textContent.split('$')[1]);
                    const quantity = parseInt(product.querySelector('input').value);
                    totalAmount += price * quantity;
                });
                document.getElementById('totalAmount').textContent = totalAmount;
            }
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});
