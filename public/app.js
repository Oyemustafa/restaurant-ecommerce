* {
  box-sizing: border-box;
}

:root {
  --bg: #fffaf3;
  --surface: #ffffff;
  --primary: #ff6b35;
  --primary-dark: #e85b2f;
  --accent: #f7c948;
  --text: #1e1b1a;
  --muted: #6b625c;
  --border: #f0e7df;
  --success: #1ca66e;
  --shadow: 0 18px 40px rgba(28, 20, 14, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  background: var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(30, 27, 26, 0.04);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 1.15rem;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #ff9f43);
  color: #fff;
}

.nav nav {
  display: flex;
  gap: 28px;
  color: var(--muted);
}

.nav-button,
.primary-btn,
.secondary-btn,
.checkout-btn,
.menu-card button,
.hero-card button {
  border: 0;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-button,
.primary-btn,
.checkout-btn,
.hero-card button,
.menu-card button {
  background: var(--primary);
  color: #fff;
}

.nav-button {
  padding: 12px 18px;
  font-weight: 600;
}

.nav-button:hover,
.primary-btn:hover,
.checkout-btn:hover,
.hero-card button:hover,
.menu-card button:hover {
  background: var(--primary-dark);
}

.hero {
  padding: 54px 0 30px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 34px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.98;
  margin: 0 0 18px;
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.7;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 24px;
  margin-bottom: 26px;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  padding: 15px 22px;
  font-weight: 700;
}

.secondary-btn {
  background: #fef3ee;
  color: var(--text);
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

.meta-row div {
  display: flex;
  flex-direction: column;
  min-width: 120px;
}

.meta-row strong {
  font-size: 1.4rem;
}

.meta-row span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-card {
  background: linear-gradient(160deg, #fff, #fff1ea);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
  padding: 24px;
}

.card-image {
  height: 200px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  font-size: 6rem;
  background: linear-gradient(135deg, #fee5cf, #ffd9a5);
}

.dish-card {
  margin-top: 18px;
}

.tag {
  display: inline-block;
  background: #ffe2d2;
  color: var(--primary-dark);
  font-weight: 700;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.7rem;
}

.dish-card h3 {
  margin: 16px 0 8px;
  font-size: 1.7rem;
}

.dish-card p {
  margin: 0;
  color: var(--muted);
}

.card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.card-row strong {
  font-size: 1.6rem;
}

.card-row button {
  padding: 12px 16px;
  font-weight: 700;
}

.offers {
  padding: 18px 0 20px;
}

.offer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.offer-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 26px 20px;
  box-shadow: 0 14px 30px rgba(17, 14, 10, 0.04);
}

.offer-box span {
  font-size: 2rem;
}

.offer-box h3 {
  margin: 16px 0 8px;
}

.offer-box p {
  margin: 0;
  color: var(--muted);
}

.menu-section {
  padding: 50px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.filter-area {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.chip {
  border: 1px solid var(--border);
  background: #fff;
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}

.chip.active {
  background: #fff2e8;
  border-color: #ffd5bd;
  color: var(--primary-dark);
}

.menu-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(300px, 0.8fr);
  gap: 26px;
  align-items: start;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.menu-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 14px 30px rgba(17, 14, 10, 0.04);
}

.menu-card-visual {
  height: 150px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #fff0d1, #ffd4b1);
  font-size: 4rem;
}

.menu-card-body {
  padding: 18px 18px 20px;
}

.menu-card-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
}

.menu-card h3 {
  margin: 0;
  font-size: 1.3rem;
}

.menu-card .category {
  font-size: 0.76rem;
  color: var(--primary-dark);
  background: #fff2e8;
  border-radius: 999px;
  padding: 6px 9px;
  font-weight: 700;
}

.menu-card p {
  color: var(--muted);
  line-height: 1.6;
  margin: 12px 0 18px;
}

.menu-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.price {
  font-size: 1.6rem;
  font-weight: 700;
}

.menu-card button {
  padding: 10px 14px;
  font-weight: 700;
}

.cart-panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 20px;
  box-shadow: var(--shadow);
  position: sticky;
  top: 90px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.cart-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.cart-items {
  min-height: 120px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.empty-cart {
  color: var(--muted);
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px;
}

.cart-item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cart-item strong {
  font-size: 1rem;
}

.quantity-controls {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 999px;
  overflow: hidden;
}

.quantity-controls button {
  width: 26px;
  height: 26px;
  border: 0;
  background: #fff;
  cursor: pointer;
  font-size: 1.1rem;
}

.quantity-controls span {
  padding: 0 10px;
  font-weight: 700;
}

.totals {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.totals > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: var(--muted);
}

.total-row {
  color: var(--text) !important;
  font-size: 1.2rem;
  margin-top: 12px;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
}

.checkout-form input,
.checkout-form textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  padding: 12px 14px;
  resize: vertical;
}

.checkout-btn {
  padding: 14px 16px;
  font-weight: 700;
  width: 100%;
}

.about-section {
  padding: 10px 0 70px;
}

.about-box {
  background: linear-gradient(135deg, #1e1b1a, #3a372f);
  color: #fff;
  border-radius: 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 32px 34px;
}

.about-box h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.about-copy p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;
  font-size: 1.05rem;
}

.site-footer {
  background: #fff;
  border-top: 1px solid var(--border);
}

.footer-inner {
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .hero-inner,
  .menu-layout,
  .about-box {
    grid-template-columns: 1fr;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }

  .section-heading {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 18px 0;
  }

  .nav nav {
    order: 3;
    width: 100%;
    justify-content: center;
  }

  .hero {
    padding-top: 30px;
  }

  .offer-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions,
  .meta-row,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
