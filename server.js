const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const menuItems = [
  {
    id: 1,
    name: 'Fire Grilled Burger',
    category: 'Burgers',
    price: 18.5,
    description: 'Beef patty, cheddar, lettuce, tomato, house sauce on a brioche bun.',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Truffle Pasta',
    category: 'Pasta',
    price: 22.0,
    description: 'Creamy garlic pasta with truffle oil, parmesan, and roasted mushrooms.',
    tag: 'Chef Pick'
  },
  {
    id: 3,
    name: 'Crispy Chicken Wrap',
    category: 'Wraps',
    price: 14.0,
    description: 'Crispy chicken, slaw, peppers, and spicy mayo in a soft tortilla.',
    tag: 'Popular'
  },
  {
    id: 4,
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: 20.5,
    description: 'Fresh mozzarella, basil, tomato sauce, and stone-baked crust.',
    tag: 'Classic'
  },
  {
    id: 5,
    name: 'Caesar Salad',
    category: 'Salads',
    price: 12.5,
    description: 'Romaine, parmesan, croutons, and our house caesar dressing.',
    tag: 'Fresh'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    category: 'Desserts',
    price: 9.5,
    description: 'Warm chocolate cake with a molten center and vanilla cream.',
    tag: 'Sweet'
  },
  {
    id: 7,
    name: 'Citrus Soda',
    category: 'Drinks',
    price: 5.0,
    description: 'Refreshing citrus blend served chilled.',
    tag: 'Cold'
  },
  {
    id: 8,
    name: 'Iced Latte',
    category: 'Drinks',
    price: 6.5,
    description: 'Smooth espresso with chilled milk and ice.',
    tag: 'Coffee'
  }
];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/menu', (req, res) => {
  res.json({ items: menuItems });
});

app.post('/api/checkout', (req, res) => {
  const { items, customer } = req.body || {};

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'Your cart is empty.' });
  }

  const subtotal = items.reduce((sum, item) => {
    return sum + (Number(item.price) * Number(item.quantity || 1));
  }, 0);

  const deliveryFee = subtotal > 0 ? 4.5 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const order = {
    id: `ORD-${Date.now()}`,
    customer: {
      name: customer?.name || 'Guest',
      email: customer?.email || 'guest@example.com',
      address: customer?.address || 'Pickup order'
    },
    items,
    subtotal: Number(subtotal.toFixed(2)),
    deliveryFee: Number(deliveryFee.toFixed(2)),
    tax: Number(tax.toFixed(2)),
    total: Number(total.toFixed(2)),
    status: 'Confirmed'
  };

  res.status(201).json({ message: 'Order placed successfully!', order });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Restaurant e-commerce app running at http://localhost:${PORT}`);
});
