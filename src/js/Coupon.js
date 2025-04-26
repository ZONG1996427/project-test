export class Coupon {
  constructor(title, location, type, count) {
    this.title = title;
    this.location = location;
    this.type = type;
    this.count = count;
  }

  createCouponElement() {
    const couponElement = document.createElement('div');
    couponElement.className = 'coupon-item';

    couponElement.innerHTML = `
            <div class="coupon-image"></div>
            <div class="coupon-info">
                <div class="coupon-title">${this.title}</div>
                <div class="coupon-location">${this.location}</div>
                <div class="coupon-meta">
                    <span class="coupon-type">${this.type}</span>
                    <span class="coupon-count">领取人数：${this.count}</span>
                </div>
            </div>
        `;

    return couponElement;
  }
} 