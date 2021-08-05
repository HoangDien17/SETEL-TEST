import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('coupon')
export class CouponController {
  @MessagePattern('checkCoupon')
  checkCoupon() {
    const resultCoupon = Math.random() < 0.5;
    return resultCoupon;
  }
}
