// @ts-nocheck

import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateResolver } from './template.resolver';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  providers: [TemplateResolver, TemplateService],
  imports: [PrismaModule],
  exports: [TemplateService],
})
export class TemplateModule {}
