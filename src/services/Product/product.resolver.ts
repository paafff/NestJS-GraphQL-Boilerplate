//

import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
// import { Relations } from '../../utils/relations.decorator';
import {
  AggregateProduct,
  CreateManyProductArgs,
  CreateOneProductArgs,
  DeleteManyProductArgs,
  DeleteOneProductArgs,
  FindFirstProductArgs,
  FindManyProductArgs,
  FindUniqueProductArgs,
  Product,
  ProductAggregateArgs,
  UpdateManyProductArgs,
  UpdateOneProductArgs,
} from '../../@generated';
import BatchPayload from '../../model/batch-payload.model';
import { replaceNullWithUndefined } from '../../utils/function/replace-null-with-undefined.function';
import { ProductService } from './product.service';

// interface ProductSelect {
//   select: Prisma.ProductSelect;
// }

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  // @Mutation(() => Product, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productCreateOne(
  //   @Args()
  //   productCreateArgs: CreateOneProductArgs,

  // ): Promise<Product | void> {
  //   return await this.productService.createOne({
  //     ...replaceNullWithUndefined(productCreateArgs),

  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productCreateMany(
  //   @Args()
  //   createManyProductArgs: CreateManyProductArgs,
  // ) {
  //   return await this.productService.createMany(
  //     replaceNullWithUndefined(createManyProductArgs),
  //   );
  // }

  // @Query(() => Product, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // productFindOne(
  //   @Args()
  //   productFindUniqueArgs: FindUniqueProductArgs,

  // ): Promise<Product | void> {
  //   return this.productService.findOne({
  //     ...replaceNullWithUndefined(productFindUniqueArgs),

  //   });
  // }

  @Query(() => [Product], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  productFindMany(
    @Args() productFindManyArgs: FindManyProductArgs,
    ProductSelect,
  ) {
    return this.productService.findMany({
      ...replaceNullWithUndefined(productFindManyArgs),
    });
  }

  @Query(() => Product, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  productFindFirst(
    @Args()
    findFirstProductArgs: FindFirstProductArgs,
    ProductSelect,
  ): Promise<Product | void> {
    return this.productService.findFirst({
      ...replaceNullWithUndefined(findFirstProductArgs),
    });
  }

  // @Mutation(() => Product, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productUpdateOne(
  //   @Args() productUpdateOneArgs: UpdateOneProductArgs,

  // ) {
  //   return this.productService.updateOne({
  //     ...replaceNullWithUndefined(productUpdateOneArgs),

  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productUpdateMany(@Args() updateManyProductArgs: UpdateManyProductArgs) {
  //   return this.productService.updateMany(
  //     replaceNullWithUndefined(updateManyProductArgs),
  //   );
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productDeleteOne(@Args() deleteOneProductArgs: DeleteOneProductArgs) {
  //   return this.productService.delete(deleteOneProductArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async productDeleteMany(@Args() deleteManyProductArgs: DeleteManyProductArgs) {
  //   return this.productService.deleteMany(deleteManyProductArgs);
  // }

  // @Query(() => AggregateProduct, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // productAggregate(@Args() productAggregateArgs: ProductAggregateArgs) {
  //   return this.productService.aggregate(productAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // productCount(@Args() productCountAggregateInput: FindManyProductArgs) {
  //   return this.productService.count(productCountAggregateInput);
  // }
}
