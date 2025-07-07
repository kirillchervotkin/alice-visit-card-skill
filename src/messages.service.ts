// src/messages.service.ts
import { Injectable } from '@nestjs/common';

import * as CONSTANTS from './constants';

@Injectable()
export class MessagesService {
  getWelcomeMessage(): string {
    return CONSTANTS.WELCOME_MESSAGE;
  }

  getUnknownMessage(): string {
    return CONSTANTS.UNKNOWN_MESSAGE;
  }

  getServicesMessage(): string {
    return CONSTANTS.SERVICES_MESSAGE;
  }

  getExperienceMessage(): string {
    return CONSTANTS.EXPERIENCE_MESSAGE;
  }

  getCostMessage(): string {
    return CONSTANTS.COST_MESSAGE;
  }

  getContactsMessage(): string {
    return CONSTANTS.CONTACTS_MESSAGE;
  }

  getMenuMessage(): string {
    return CONSTANTS.MENU_MESSAGE;
  }

  getWhatCanYouDoMessage(): string {
    return CONSTANTS.WHAT_CAN_YOU_DO_MESSAGE;
  }

  getGoodbyeMessage(): string {
    return CONSTANTS.GOODBYE_MESSAGE;
  }
}