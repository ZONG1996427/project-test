import '../css/style.css';

class ShoppingCart {
  constructor() {
    this.cartItems = [
      {
        id: 1,
        title: '轻奢澳洲羊毛被-春秋款(230X150cm)',
        price: 990.00,
        quantity: 2,
        selected: true,
        image: 'placeholder.jpg'
      }
    ];
    this.activeTab = 'all';
    this.init();
  }

  init() {
    this.renderCartItems();
    this.updateTotal();
    this.bindEvents();
  }

  renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = this.cartItems.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="item-header">
                    <label class="checkbox">
                        <input type="checkbox" class="checkbox__input" ${item.selected ? 'checked' : ''}>
                        <span class="checkbox__label"></span>
                    </label>
                </div>
                <div class="item-content">
                    <div class="item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="item-info">
                        <div class="item-title">${item.title}</div>
                        <div class="item-price">¥${item.price.toFixed(2)}</div>
                        <div class="quantity-control">
                            <div class="stepper">
                                <button class="stepper__minus" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                                <input type="text" class="stepper__input" value="${item.quantity}" readonly>
                                <button class="stepper__plus">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
  }

  updateTotal() {
    const totalPrice = this.cartItems.reduce((total, item) => {
      if (item.selected) {
        return total + (item.price * item.quantity);
      }
      return total;
    }, 0);
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
  }

  bindEvents() {
    // 标签页切换
    document.querySelector('.tabs__nav').addEventListener('click', (e) => {
      if (e.target.classList.contains('tab')) {
        document.querySelector('.tab--active').classList.remove('tab--active');
        e.target.classList.add('tab--active');
        this.activeTab = e.target.dataset.tab;
      }
    });

    // 商品选择
    document.getElementById('cartItems').addEventListener('change', (e) => {
      if (e.target.classList.contains('checkbox__input')) {
        const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
        const item = this.cartItems.find(item => item.id === itemId);
        if (item) {
          item.selected = e.target.checked;
          this.updateTotal();
        }
      }
    });

    // 数量调整
    document.getElementById('cartItems').addEventListener('click', (e) => {
      if (e.target.classList.contains('stepper__minus') ||
        e.target.classList.contains('stepper__plus')) {
        const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
        const item = this.cartItems.find(item => item.id === itemId);
        if (item) {
          if (e.target.classList.contains('stepper__minus') && item.quantity > 1) {
            item.quantity--;
          } else if (e.target.classList.contains('stepper__plus')) {
            item.quantity++;
          }
          this.renderCartItems();
          this.updateTotal();
        }
      }
    });

    // 提交按钮
    document.getElementById('submitButton').addEventListener('click', () => {
      const selectedItems = this.cartItems.filter(item => item.selected);
      console.log('移入收藏夹的商品：', selectedItems);
    });

    // 返回按钮
    document.querySelector('.back-button').addEventListener('click', () => {
      console.log('返回上一页');
    });
  }
}

// 初始化购物车
document.addEventListener('DOMContentLoaded', () => {
  new ShoppingCart();
}); 