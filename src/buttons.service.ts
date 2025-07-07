// src/buttons.service.ts
import { Injectable } from '@nestjs/common';
import { Button } from '@kirillchervotkin/alice-nestjs-framework';
import { 
    SERVICE_BUTTON, 
    EXPERIENCE_BUTTON, 
    COST_BUTTON, 
    CONTACTS_BUTTON,
    WHAT_CAN_YOU_DO_BUTTON,
    MENU_BUTTON 
} from './constants';

@Injectable()
export class ButtonsService {
    getCommonButtons(): Button[] {
        return [
            { title: SERVICE_BUTTON,  hide: false },
            { title: EXPERIENCE_BUTTON,  hide: false },
            { title: COST_BUTTON,  hide: false },
            { title: CONTACTS_BUTTON, hide: false },
            { title: MENU_BUTTON, hide: false },
          ];
    }

    getExperienceButtons(hide: boolean): Button[] {
        return [
            //{ title: 'Скачать портфолио', url: 'https://1c.itplan.ru/portfolio/', hide: hide },
        ];
    }

    getCostButtons(hide: boolean): Button[] {
        return [
            //{ title: 'Написать на почту', url: 'mailto:info@itplan.ru', hide: hide },
        ];
    }

    getContactButtons(hide: boolean): Button[] {
        return [
            //{ title: 'Наш сайт', url: 'https://1c.itplan.ru/kontaktyi/', hide: hide }
        ];
    }

    getWhatCanYouDoButton(): Button[] {
        return [{ title: WHAT_CAN_YOU_DO_BUTTON, hide: false }];
    }

    getMenuButton(): Button[] {
        return [{ title: MENU_BUTTON, hide: false }];
    }
}