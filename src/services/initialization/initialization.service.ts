import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { faker } from '@faker-js/faker';
import { Seed } from 'prisma/seeds/seed';

@Injectable()
export class InitializationService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly logger = new Logger(InitializationService.name);

  async initialize() {
    const users = await this.prisma.user.findMany();

    try {
      if (users.length <= 0) {
        await Seed();
      }

      console.log('InitializationService -> initialize -> users', users);
    } catch (error) {
      this.logger.error(error);
      this.logger.error(`Error: ${error}`);
    }
  }

  //================================================================================================
}
