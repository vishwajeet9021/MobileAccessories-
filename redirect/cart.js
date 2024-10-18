document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is currently empty.</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('card-body');
            itemDiv.className = 'card-body';
            itemDiv.innerHTML = "C:\Users\Admin\Desktop\bootstrap\mobileshop\classwebsite.html"
                <div class="card" style="width: 16rem;">
                    <div class="card-body">
                        <h5 class="card-title">${item.APPLE ADAPTOR}</h5>
                        <p class="card-text">Price: Rs.${item.1799}</p>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }
});
