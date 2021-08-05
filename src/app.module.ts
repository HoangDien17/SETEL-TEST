import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [CouponModule],
})
export class AppModule {}
