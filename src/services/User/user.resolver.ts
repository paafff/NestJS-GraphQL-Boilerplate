// 

import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from '../../utils/relations.decorator';
import {
  AggregateUser,
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserAggregateArgs,
  UpdateManyUserArgs,
  UpdateOneUserArgs,
} from '../../@generated';
import BatchPayload from '../../model/batch-payload.model';
import { replaceNullWithUndefined } from '../../utils/function/replace-null-with-undefined.function';
import { UserService } from './user.service';

// interface UserSelect {
//   select: Prisma.UserSelect;
// }

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @Mutation(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userCreateOne(
  //   @Args()
  //   userCreateArgs: CreateOneUserArgs,

  // ): Promise<User | void> {
  //   return await this.userService.createOne({
  //     ...replaceNullWithUndefined(userCreateArgs),

  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userCreateMany(
  //   @Args()
  //   createManyUserArgs: CreateManyUserArgs,
  // ) {
  //   return await this.userService.createMany(
  //     replaceNullWithUndefined(createManyUserArgs),
  //   );
  // }

  // @Query(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userFindOne(
  //   @Args()
  //   userFindUniqueArgs: FindUniqueUserArgs,

  // ): Promise<User | void> {
  //   return this.userService.findOne({
  //     ...replaceNullWithUndefined(userFindUniqueArgs),

  //   });
  // }

  @Query(() => [User], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindMany(
    @Args() userFindManyArgs: FindManyUserArgs,
    @Relations() relations: UserSelect,
  ) {
    return this.userService.findMany({
      ...replaceNullWithUndefined(userFindManyArgs),
      select: relations.select,
    });
  }

  @Query(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindFirst(
    @Args()
    findFirstUserArgs: FindFirstUserArgs,
    @Relations() relations: UserSelect,
  ): Promise<User | void> {
    return this.userService.findFirst({
      ...replaceNullWithUndefined(findFirstUserArgs),
      select: relations.select,
    });
  }

  // @Mutation(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userUpdateOne(
  //   @Args() userUpdateOneArgs: UpdateOneUserArgs,

  // ) {
  //   return this.userService.updateOne({
  //     ...replaceNullWithUndefined(userUpdateOneArgs),

  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userUpdateMany(@Args() updateManyUserArgs: UpdateManyUserArgs) {
  //   return this.userService.updateMany(
  //     replaceNullWithUndefined(updateManyUserArgs),
  //   );
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userDeleteOne(@Args() deleteOneUserArgs: DeleteOneUserArgs) {
  //   return this.userService.delete(deleteOneUserArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userDeleteMany(@Args() deleteManyUserArgs: DeleteManyUserArgs) {
  //   return this.userService.deleteMany(deleteManyUserArgs);
  // }

  // @Query(() => AggregateUser, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userAggregate(@Args() userAggregateArgs: UserAggregateArgs) {
  //   return this.userService.aggregate(userAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userCount(@Args() userCountAggregateInput: FindManyUserArgs) {
  //   return this.userService.count(userCountAggregateInput);
  // }
}
