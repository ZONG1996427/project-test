import { Coupon } from './Coupon';

export class CouponList {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.coupons = [];
  }

  addCoupon(title, location, type, count) {
    const coupon = new Coupon(title, location, type, count);
    this.coupons.push(coupon);
  }

  render() {
    this.container.innerHTML = '';
    this.coupons.forEach(coupon => {
      const couponElement = coupon.createCouponElement();
      this.container.appendChild(couponElement);
    });
  }

  loadMockData() {
    const mockData = [
      {
        title: '微信支付满100减20元',
        location: '[锦江区] 春熙路店',
        type: '微信支付',
        count: 43563
      },
      {
        title: '微信支付满100减20元',
        location: '[锦江区] 春熙路店',
        type: '微信支付',
        count: 43563
      },
      {
        title: '微信支付满100减20元',
        location: '[锦江区] 春熙路店',
        type: '微信支付',
        count: 43563
      },
      {
        title: '微信支付满100减20元',
        location: '[锦江区] 春熙路店',
        type: '微信支付',
        count: 43563
      },
      {
        title: '微信支付满100减20元',
        location: '[锦江区] 春熙路店',
        type: '微信支付',
        count: 43563
      }
    ];

    mockData.forEach(data => {
      this.addCoupon(data.title, data.location, data.type, data.count);
    });

    this.render();
  }
} 