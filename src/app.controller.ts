// src/app.controller.ts
import { Controller, Inject } from '@nestjs/common';
import { 
  Intent, 
  SkillResponseBuilder,
  SkillResponse, 
  Unknown,
  Button
} from 'c:/Users/e.latman.ITPLAN/Documents/GitHub/alice-visit-card-skill/node_modules/@kirillchervotkin/alice-nestjs-framework/dist/index';
import { MessagesService } from './messages.service';
import { ButtonsService } from './buttons.service';

@Controller()
export class AliceController {
  private readonly hideButton: boolean = false;

  constructor(
    @Inject(MessagesService) private readonly messagesService: MessagesService,
    @Inject(ButtonsService) private readonly buttonsService: ButtonsService,
  ) { }

  // Обработчик когда пользователь запустил навык
 @Intent()
    start(): SkillResponse {
        const welcomeMessage = this.messagesService.getWelcomeMessage();
        return new SkillResponseBuilder(welcomeMessage)
            .setButtons(this.buttonsService.getWhatCanYouDoButton())
            .setButtons(this.buttonsService.getCommonButtons())
            .build();
    }

  // Обработчик нераспознанных команд
 @Unknown('Unknown')
  fallback(): SkillResponse {
    return new SkillResponseBuilder(this.messagesService.getUnknownMessage())
      .setButtons(this.buttonsService.getCommonButtons())
      .build();
  }

  // Обработчик интента Услуги
  @Intent('services')
  services(): SkillResponse {
    return new SkillResponseBuilder(this.messagesService.getServicesMessage())
    .setButtons(this.buttonsService.getCommonButtons())
    .build();
  }

  // Обработчик интента Опыт
 @Intent('experience')
  experience(): SkillResponse {
    const buttons: Button[] = this.buttonsService.getExperienceButtons(this.hideButton);
    return new SkillResponseBuilder(this.messagesService.getExperienceMessage())
      .setButtons(buttons)
      .setButtons(this.buttonsService.getCommonButtons())
      .build();
  }

 // Обработчик интента Стоимость
  @Intent('cost')
  cost(): SkillResponse {
    const buttons: Button[] = this.buttonsService.getCostButtons(this.hideButton);
    return new SkillResponseBuilder(this.messagesService.getCostMessage())
      .setButtons(buttons)
      .setButtons(this.buttonsService.getCommonButtons())
      .build();
  }

  // Обработчик интента Контакты
   @Intent('contacts')
  contacts(): SkillResponse {
    const buttons: Button[] = this.buttonsService.getContactButtons(this.hideButton);
    return new SkillResponseBuilder(this.messagesService.getContactsMessage())
      .setButtons(buttons)
      .setButtons(this.buttonsService.getCommonButtons())
      .build();
  }

  // Обработчик интента Меню
  @Intent('menu')
  menu(): SkillResponse {
    return new SkillResponseBuilder(this.messagesService.getMenuMessage())
      .setButtons(this.buttonsService.getCommonButtons())
      .build();
  }

  // Обработчик интента Что ты умеешь
  @Intent('whatcanyoudo')
  whatcanyoudo(): SkillResponse {
    return new SkillResponseBuilder(this.messagesService.getWhatCanYouDoMessage())
      .setButtons(this.buttonsService.getCommonButtons())
      .build();
  }

  // Обработчик интента Прощание
  @Intent('goodbye')
  goodbye(): SkillResponse {
      return new SkillResponseBuilder(this.messagesService.getGoodbyeMessage()).setEndSession().build();
  }
}
