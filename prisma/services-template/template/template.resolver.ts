// @ts-nocheck

import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  AggregateTemplate,
  CreateManyTemplateArgs,
  CreateOneTemplateArgs,
  DeleteManyTemplateArgs,
  DeleteOneTemplateArgs,
  FindFirstTemplateArgs,
  FindManyTemplateArgs,
  FindUniqueTemplateArgs,
  Template,
  TemplateAggregateArgs,
  UpdateManyTemplateArgs,
  UpdateOneTemplateArgs,
} from '../../@generated';
import BatchPayload from '../../model/batch-payload.model';
import { replaceNullWithUndefined } from '../../utils/function/replace-null-with-undefined.function';
import { TemplateService } from './template.service';

// interface TemplateSelect {
//   select: Prisma.TemplateSelect;
// }

@Resolver(() => Template)
export class TemplateResolver {
  constructor(private readonly templateService: TemplateService) {}

  // @Mutation(() => Template, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async templateCreateOne(
  //   @Args()
  //   templateCreateArgs: CreateOneTemplateArgs,

  // ): Promise<Template | void> {
  //   return await this.templateService.createOne({
  //     ...replaceNullWithUndefined(templateCreateArgs),

  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async templateCreateMany(
  //   @Args()
  //   createManyTemplateArgs: CreateManyTemplateArgs,
  // ) {
  //   return await this.templateService.createMany(
  //     replaceNullWithUndefined(createManyTemplateArgs),
  //   );
  // }

  // @Query(() => Template, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // templateFindOne(
  //   @Args()
  //   templateFindUniqueArgs: FindUniqueTemplateArgs,

  // ): Promise<Template | void> {
  //   return this.templateService.findOne({
  //     ...replaceNullWithUndefined(templateFindUniqueArgs),

  //   });
  // }

  @Query(() => [Template], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  templateFindMany(
    @Args() templateFindManyArgs: FindManyTemplateArgs,
    @Relations() relations: TemplateSelect,
  ) {
    return this.templateService.findMany({
      ...replaceNullWithUndefined(templateFindManyArgs),
      select: relations.select,
    });
  }

  @Query(() => Template, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  templateFindFirst(
    @Args()
    findFirstTemplateArgs: FindFirstTemplateArgs,
    @Relations() relations: TemplateSelect,
  ): Promise<Template | void> {
    return this.templateService.findFirst({
      ...replaceNullWithUndefined(findFirstTemplateArgs),
      select: relations.select,
    });
  }

  // @Mutation(() => Template, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async templateUpdateOne(
  //   @Args() templateUpdateOneArgs: UpdateOneTemplateArgs,

  // ) {
  //   return this.templateService.updateOne({
  //     ...replaceNullWithUndefined(templateUpdateOneArgs),

  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async templateUpdateMany(@Args() updateManyTemplateArgs: UpdateManyTemplateArgs) {
  //   return this.templateService.updateMany(
  //     replaceNullWithUndefined(updateManyTemplateArgs),
  //   );
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async templateDeleteOne(@Args() deleteOneTemplateArgs: DeleteOneTemplateArgs) {
  //   return this.templateService.delete(deleteOneTemplateArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async templateDeleteMany(@Args() deleteManyTemplateArgs: DeleteManyTemplateArgs) {
  //   return this.templateService.deleteMany(deleteManyTemplateArgs);
  // }

  // @Query(() => AggregateTemplate, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // templateAggregate(@Args() templateAggregateArgs: TemplateAggregateArgs) {
  //   return this.templateService.aggregate(templateAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // templateCount(@Args() templateCountAggregateInput: FindManyTemplateArgs) {
  //   return this.templateService.count(templateCountAggregateInput);
  // }
}
