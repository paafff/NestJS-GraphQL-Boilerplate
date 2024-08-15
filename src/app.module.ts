import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { UserModule } from './services/User/user.module';
import { ProductModule } from './services/Product/product.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { InitializationModule } from './services/initialization/initialization.module';

dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => {
        const environment = process.env.NODE_ENV;
        console.log('🚀 ~ environment check:', environment);
        return {
          autoSchemaFile: join(process.cwd(), 'graphql/schema.graphql'),
          introspection: true,

          playground: environment === 'development' ? false : false, // Assuming you want to disable playground for all environments
          plugins:
            environment === 'development'
              ? [ApolloServerPluginLandingPageLocalDefault()]
              : undefined,
          formatError: (error) => {
            const originalError = error.extensions?.originalError as any;
            if (!originalError) {
              return {
                message: error.message,
                code: error.extensions?.code,
              };
            }
            return {
              message: originalError.message,
              code: error.extensions?.code,
            };
          },
        };
      },
    }),

    //services module
    UserModule,
    ProductModule,InitializationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
