// 

import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';
// import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(ProductService.name);

  async createOne(productCreateArgs: Prisma.ProductCreateArgs) {
    try {
      return await this.prisma.product.create(productCreateArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async createMany(productCreateManyArgs: Prisma.ProductCreateManyArgs) {
    try {
      return await this.prisma.product.createMany(productCreateManyArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async findOne(productFindUniqueArgs: Prisma.ProductFindUniqueArgs) {
    try {
      return await this.prisma.product.findUnique(productFindUniqueArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async findMany(productFindManyArgs: Prisma.ProductFindManyArgs) {
    try {
      return await this.prisma.product.findMany(productFindManyArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async findFirst(productFindFirstArgs: Prisma.ProductFindFirstArgs) {
    try {
      return await this.prisma.product.findFirst(productFindFirstArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async updateOne(productUpdateOneArgs: Prisma.ProductUpdateArgs) {
    try {
      return await this.prisma.product.update(productUpdateOneArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async updateMany(productUpdateManyArgs: Prisma.ProductUpdateManyArgs) {
    try {
      return await this.prisma.product.updateMany(productUpdateManyArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async delete(productDeleteArgs: Prisma.ProductDeleteArgs) {
    try {
      await this.prisma.product.delete(productDeleteArgs);
      return true;
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async deleteMany(productDeleteManyArgs: Prisma.ProductDeleteManyArgs) {
    try {
      await this.prisma.product.deleteMany(productDeleteManyArgs);
      return true;
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async aggregate(productAggregateArgs: Prisma.ProductAggregateArgs) {
    try {
      return await this.prisma.product.aggregate(productAggregateArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }

  async count(productCountArgs: Prisma.ProductCountArgs) {
    try {
      return await this.prisma.product.count(productCountArgs);
    } catch (err) {
      this.logger.error(err);
     
    }
  }
}
