import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AliceController } from './app.controller';
import { IntentMiddleware } from 'c:/Users/e.latman.ITPLAN/Documents/GitHub/alice-visit-card-skill/node_modules/@kirillchervotkin/alice-nestjs-framework/dist/index';
import { MessagesService } from './messages.service';
import { ButtonsService } from './buttons.service';

@Module({
  imports: [],
  controllers: [AliceController],
  providers: [MessagesService, ButtonsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IntentMiddleware)
      .forRoutes('*');
  }
}
