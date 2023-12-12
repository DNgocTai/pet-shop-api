import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot(
      'mongodb+srv://dainn:L8eNw048vitiSMMd@mymongodb.pnkd3kp.mongodb.net/',
      { dbName: 'mongod' },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
