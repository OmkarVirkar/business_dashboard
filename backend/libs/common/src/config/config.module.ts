import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule
} from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // makes env vars available everywhere
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required()
        // add other environment variables and their validations here
      })
    })
  ],
  providers: [ConfigService], // add ConfigService to providers
  exports: [ConfigService] // export ConfigService so it can be used in other modules
})
export class ConfigModule {}
