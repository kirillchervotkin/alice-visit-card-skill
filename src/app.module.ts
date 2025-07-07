import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AliceController } from './app.controller';
import { IntentMiddleware } from '@kirillchervotkin/alice-nestjs-framework';
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
