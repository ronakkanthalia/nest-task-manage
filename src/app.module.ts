import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TaskModule, TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
