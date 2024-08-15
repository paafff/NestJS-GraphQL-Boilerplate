import { Prisma, PrismaClient } from '@prisma/client';
import { join } from 'path';
import * as fs from 'fs/promises';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

let prisma = new PrismaClient();

export async function Seed() {
  const records: number = 100;

  const userCreateManyInput: Prisma.UserCreateManyInput[] = Array.from({
    length: records / 10,
  }).map((_, index) => {
    const username = faker.internet.userName();
    const hashedPassword = bcrypt.hashSync(username, 10);

    return {
      id: faker.string.uuid(),
      email: faker.internet.email(),
      name: username,
      password: hashedPassword,
    };
  });

  try {
    console.log('🚀 ~ Seed Start... ');

    await prisma.$transaction(
      async (prisma) => {
        await prisma.user
          .createMany({
            data: userCreateManyInput,
          })
          .catch((error) => {
            console.error('Error creating user', error);
            throw error;
          });
      },
      {
        maxWait: 100000, // default: 2000
        timeout: 20000000, // default: 5000
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
      },
    );
  } catch (error) {
    console.error('Seeding error', error);
  } finally {
    console.log('🚀 ~ Seed Completed... ');
    await prisma.$disconnect();
  }

  //================================================================================================
}
