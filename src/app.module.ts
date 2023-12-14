import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user.module';
import { UserEntity } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'tyt',
      password: 'password',
      database: 'tdb',
      entities: [UserEntity],
      synchronize: true
    }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
