// 

import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  providers: [ProductResolver, ProductService],
  imports: [PrismaModule],
  exports: [ProductService],
})
export class ProductModule {}
