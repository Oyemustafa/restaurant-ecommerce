const menuGrid = document.getElementById('menu-items');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const subtotalEl = document.getElementById('subtotal');
const deliveryEl = document.getElementById('delivery');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const checkoutForm = document.getElementById('checkout-form');
const filterButtons = document.querySelectorAll('.chip');

const state = {
  menu: [],
  cart: JSON.parse(localStorage.getItem('urban-bites-cart') || '[]'),
  orders: JSON.parse(localStorage.getItem('urban-bites-orders') || '[]'),
  activeFilter: 'All'
};

const formatCurrency = (value) => `$${Number(value).toFixed(2)}`;

const saveCart = () => {
  localStorage.setItem('urban-bites-cart', JSON.stringify(state.cart));
};

const saveOrders = () => {
  localStorage.setItem('urban-bites-orders', JSON.stringify(state.orders));
};

const getFilteredMenu = () => {
  if (state.activeFilter === 'All') return state.menu;
  return state.menu.filter((item) => item.category === state.activeFilter);
};

const getCartSummary = () => {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 4.5 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + delivery + tax;

  return { subtotal, delivery, tax, total };
};

const renderMenu = () => {
  const filteredMenu = getFilteredMenu();

  menuGrid.innerHTML = filteredMenu
    .map(
      (item) => `
        <article class="menu-card">
          <div class="menu-card-visual">${item.tag === 'Best Seller' ? '🍔' : item.category === 'Pasta' ? '🍝' : item.category === 'Pizza' ? '🍕' : item.category === 'Salads' ? '🥗' : item.category === 'Desserts' ? '🍰' : item.category === 'Wraps' ? '🌯' : item.category === 'Drinks' ? '🥤' : item.category === 'Curries' ? '🍛' : item.category === 'Seafood' ? '🐟' : '🍽️'}</div>
          <div class="menu-card-body">
            <div class="menu-card-header">
              <h3>${item.name}</h3>
              <span class="category">${item.category}</span>
            </div>
            <p>${item.description}</p>
            <div class="menu-card-footer">
              <span class="price">${formatCurrency(item.price)}</span>
              <button type="button" data-id="${item.id}">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('[data-id]').forEach((button) => {
    button.addEventListener('click', () => addToCart(Number(button.dataset.id)));
  });
};

const renderCart = () => {
  if (state.cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = state.cart
      .map(
        (item) => `
          <div class="cart-item">
            <div class="cart-item-info">
              <strong>${item.name}</strong>
              <span>${formatCurrency(item.price)}</span>
            </div>
            <div class="quantity-controls">
              <button type="button" data-action="decrease" data-id="${item.id}">-</button>
              <span>${item.quantity}</span>
              <button type="button" data-action="increase" data-id="${item.id}">+</button>
            </div>
          </div>
        `
      )
      .join('');

    document.querySelectorAll('[data-action]').forEach((button) => {
      button.addEventListener('click', () => modifyQuantity(Number(button.dataset.id), button.dataset.action));
    });
  }

  const { subtotal, delivery, tax, total } = getCartSummary();
  const itemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCount.textContent = `${itemCount} item${itemCount === 1 ? '' : 's'}`;
  subtotalEl.textContent = formatCurrency(subtotal);
  deliveryEl.textContent = formatCurrency(delivery);
  taxEl.textContent = formatCurrency(tax);
  totalEl.textContent = formatCurrency(total);
};

const addToCart = (itemId) => {
  const menuItem = state.menu.find((item) => item.id === itemId);
  if (!menuItem) return;

  const existingItem = state.cart.find((item) => item.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ ...menuItem, quantity: 1 });
  }

  saveCart();
  renderCart();
};

const modifyQuantity = (itemId, action) => {
  const item = state.cart.find((entry) => entry.id === itemId);
  if (!item) return;

  if (action === 'increase') {
    item.quantity += 1;
  } else if (action === 'decrease') {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter((entry) => entry.id !== itemId);
    }
  }

  saveCart();
  renderCart();
};

const bindFilterButtons = () => {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.activeFilter = button.textContent.trim();

      filterButtons.forEach((chip) => chip.classList.toggle('active', chip === button));
      renderMenu();
    });
  });
};

const fetchMenu = async () => {
  try {
    const response = await fetch('/api/menu');
    const data = await response.json();
    state.menu = data.items;
    renderMenu();
    renderCart();
  } catch (error) {
    console.error('Failed to load menu', error);
  }
};

checkoutForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (state.cart.length === 0) {
    alert('Please add at least one item to your cart.');
    return;
  }

  const customer = {
    name: document.getElementById('customer-name').value,
    email: document.getElementById('customer-email').value,
    address: document.getElementById('customer-address').value
  };

  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: state.cart, customer })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Checkout failed');
    }

    state.orders.push(result.order);
    saveOrders();

    alert(`${result.message}\n\nOrder ID: ${result.order.id}\nTotal: ${formatCurrency(result.order.total)}`);
    state.cart = [];
    saveCart();
    checkoutForm.reset();
    renderCart();
  } catch (error) {
    alert(error.message);
  }
});

bindFilterButtons();
fetchMenu();
