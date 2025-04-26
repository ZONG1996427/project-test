import '../styles/main.css';
import { CouponList } from './CouponList';

document.addEventListener('DOMContentLoaded', () => {
  const couponList = new CouponList('couponList');
  couponList.loadMockData();
}); 