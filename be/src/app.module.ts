import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './features/users/users.module';
import { User } from './features/users/entities/user.entity';
@Module({
  imports: [ConfigModule.forRoot(
    { isGlobal: true, }
  ),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'log?1234',
    database: 'crud',
    entities: [User],
    synchronize: true,
  }),
  UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
