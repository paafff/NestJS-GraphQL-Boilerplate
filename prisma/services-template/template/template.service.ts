// @ts-nocheck

import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';
// import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class TemplateService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(TemplateService.name);

  async createOne(templateCreateArgs: Prisma.TemplateCreateArgs) {
    try {
      return await this.prisma.template.create(templateCreateArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async createMany(templateCreateManyArgs: Prisma.TemplateCreateManyArgs) {
    try {
      return await this.prisma.template.createMany(templateCreateManyArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async findOne(templateFindUniqueArgs: Prisma.TemplateFindUniqueArgs) {
    try {
      return await this.prisma.template.findUnique(templateFindUniqueArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async findMany(templateFindManyArgs: Prisma.TemplateFindManyArgs) {
    try {
      return await this.prisma.template.findMany(templateFindManyArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async findFirst(templateFindFirstArgs: Prisma.TemplateFindFirstArgs) {
    try {
      return await this.prisma.template.findFirst(templateFindFirstArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async updateOne(templateUpdateOneArgs: Prisma.TemplateUpdateArgs) {
    try {
      return await this.prisma.template.update(templateUpdateOneArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async updateMany(templateUpdateManyArgs: Prisma.TemplateUpdateManyArgs) {
    try {
      return await this.prisma.template.updateMany(templateUpdateManyArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async delete(templateDeleteArgs: Prisma.TemplateDeleteArgs) {
    try {
      await this.prisma.template.delete(templateDeleteArgs);
      return true;
    } catch (err) {
      this.logger.error(err);
    }
  }

  async deleteMany(templateDeleteManyArgs: Prisma.TemplateDeleteManyArgs) {
    try {
      await this.prisma.template.deleteMany(templateDeleteManyArgs);
      return true;
    } catch (err) {
      this.logger.error(err);
    }
  }

  async aggregate(templateAggregateArgs: Prisma.TemplateAggregateArgs) {
    try {
      return await this.prisma.template.aggregate(templateAggregateArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }

  async count(templateCountArgs: Prisma.TemplateCountArgs) {
    try {
      return await this.prisma.template.count(templateCountArgs);
    } catch (err) {
      this.logger.error(err);
    }
  }
}
