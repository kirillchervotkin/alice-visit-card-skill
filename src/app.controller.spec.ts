import { Test, TestingModule } from '@nestjs/testing';
import { AliceController } from '../src/app.controller';
import { MessagesService } from '../src/messages.service';
import { ButtonsService } from '../src/buttons.service';
import {
    SERVICE_BUTTON,
    EXPERIENCE_BUTTON,
    COST_BUTTON,
    CONTACTS_BUTTON,
    WHAT_CAN_YOU_DO_BUTTON,
    MENU_BUTTON,
    WELCOME_MESSAGE,
    UNKNOWN_MESSAGE,
    SERVICES_MESSAGE,
    EXPERIENCE_MESSAGE,
    COST_MESSAGE,
    CONTACTS_MESSAGE,
    MENU_MESSAGE,
    WHAT_CAN_YOU_DO_MESSAGE,
    GOODBYE_MESSAGE,
} from '../src/constants';

describe('AliceController (Unit)', () => {
    let controller: AliceController;
    let messagesService: MessagesService;
    let buttonsService: ButtonsService;

    beforeEach(async () => {
        // mock-объекты для MessagesService и ButtonsService
        const mockMessagesService = {
            getWelcomeMessage: () => WELCOME_MESSAGE,
            getUnknownMessage: () => UNKNOWN_MESSAGE,
            getServicesMessage: () => SERVICES_MESSAGE,
            getExperienceMessage: () => EXPERIENCE_MESSAGE,
            getCostMessage: () => COST_MESSAGE,
            getContactsMessage: () => CONTACTS_MESSAGE,
            getMenuMessage: () => MENU_MESSAGE,
            getWhatCanYouDoMessage: () => WHAT_CAN_YOU_DO_MESSAGE,
            getGoodbyeMessage: () => GOODBYE_MESSAGE,
        };

        const mockButtonsService = {
            getCommonButtons: () => [{ title: SERVICE_BUTTON, hide: false },
            { title: EXPERIENCE_BUTTON, hide: false },
            { title: COST_BUTTON, hide: false },
            { title: CONTACTS_BUTTON, hide: false },
            { title: MENU_BUTTON, hide: false }],
            getExperienceButtons: () => [],
            getCostButtons: () => [],
            getContactButtons: () => [],
            getWhatCanYouDoButton: () => [{ title: WHAT_CAN_YOU_DO_BUTTON, hide: false }],
            getMenuButton: () => [{ title: MENU_BUTTON, hide: false }]
        };

        // Тестовый модуль NestJS
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AliceController],
            providers: [
                {
                    provide: MessagesService,
                    useValue: mockMessagesService,
                },
                {   provide: ButtonsService,
                    useValue: mockButtonsService,
                },
            ],
        }).compile();

        // Экземпляры контроллера и сервисов из тестового модуля
        controller = module.get<AliceController>(AliceController);
        messagesService = module.get<MessagesService>(MessagesService);
        buttonsService = module.get<ButtonsService>(ButtonsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('start()', () => {
        it('should return a SkillResponse with welcome message and "What can you do" button', () => {
            const result = controller.start();
            expect(result.response.text).toBe(WELCOME_MESSAGE);
            expect(result.response.buttons).toEqual([
                { title: WHAT_CAN_YOU_DO_BUTTON, hide: false },
                { title: SERVICE_BUTTON, hide: false },
                { title: EXPERIENCE_BUTTON, hide: false },
                { title: COST_BUTTON, hide: false },
                { title: CONTACTS_BUTTON, hide: false },
                { title: MENU_BUTTON, hide: false }
            ]);
        });
    });

    describe('fallback()', () => {
        it('should return a SkillResponse with unknown message and common buttons', () => {
            const result = controller.fallback();
            expect(result.response.text).toBe(UNKNOWN_MESSAGE);
            expect(result.response.buttons).toEqual([{ title: SERVICE_BUTTON, hide: false },
            { title: EXPERIENCE_BUTTON, hide: false },
            { title: COST_BUTTON, hide: false },
            { title: CONTACTS_BUTTON, hide: false },
            { title: MENU_BUTTON, hide: false }]);
        });
    });

    describe('services()', () => {
        it('should return a SkillResponse with services message and common buttons', () => {
            const result = controller.services();
            expect(result.response.text).toBe(SERVICES_MESSAGE);
            expect(result.response.buttons).toEqual([{ title: SERVICE_BUTTON, hide: false },
            { title: EXPERIENCE_BUTTON, hide: false },
            { title: COST_BUTTON, hide: false },
            { title: CONTACTS_BUTTON, hide: false },
            { title: MENU_BUTTON, hide: false }]);
        });
    });

    describe('experience()', () => {
        it('should return a SkillResponse with experience message and common buttons', () => {
            const result = controller.experience();
            expect(result.response.text).toBe(EXPERIENCE_MESSAGE);
            expect(result.response.buttons).toEqual([
                { title: MENU_BUTTON, hide: false },
                { title: SERVICE_BUTTON, hide: false },
                { title: EXPERIENCE_BUTTON, hide: false },
                { title: COST_BUTTON, hide: false },
                { title: CONTACTS_BUTTON, hide: false },
                { title: MENU_BUTTON, hide: false }
            ]);
        });
    });

    describe('cost()', () => {
        it('should return a SkillResponse with cost message and common buttons', () => {
            const result = controller.cost();
            expect(result.response.text).toBe(COST_MESSAGE);
            expect(result.response.buttons).toEqual([
                { title: MENU_BUTTON, hide: false },
                { title: SERVICE_BUTTON, hide: false },
                { title: EXPERIENCE_BUTTON, hide: false },
                { title: COST_BUTTON, hide: false },
                { title: CONTACTS_BUTTON, hide: false },
                { title: MENU_BUTTON, hide: false }
            ]);
        });
    });

    describe('contacts()', () => {
        it('should return a SkillResponse with contact message and common buttons', () => {
            const result = controller.contacts();
            expect(result.response.text).toBe(CONTACTS_MESSAGE);
            expect(result.response.buttons).toEqual([
                { title: MENU_BUTTON, hide: false },
                { title: SERVICE_BUTTON, hide: false },
                { title: EXPERIENCE_BUTTON, hide: false },
                { title: COST_BUTTON, hide: false },
                { title: CONTACTS_BUTTON, hide: false },
                { title: MENU_BUTTON, hide: false }
            ]);
        });
    });

    describe('menu()', () => {
        it('should return a SkillResponse with menu message and common buttons', () => {
            const result = controller.menu();
            expect(result.response.text).toBe(MENU_MESSAGE);
            expect(result.response.buttons).toEqual([{ title: SERVICE_BUTTON, hide: false },
            { title: EXPERIENCE_BUTTON, hide: false },
            { title: COST_BUTTON, hide: false },
            { title: CONTACTS_BUTTON, hide: false },
            { title: MENU_BUTTON, hide: false }]);
        });
    });

    describe('whatcanyoudo()', () => {
        it('should return a SkillResponse with whatcanyoudo message and common buttons', () => {
            const result = controller.whatcanyoudo();
            expect(result.response.text).toBe(WHAT_CAN_YOU_DO_MESSAGE);
            expect(result.response.buttons).toEqual([{ title: SERVICE_BUTTON, hide: false },
            { title: EXPERIENCE_BUTTON, hide: false },
            { title: COST_BUTTON, hide: false },
            { title: CONTACTS_BUTTON, hide: false },
            { title: MENU_BUTTON, hide: false }]);
        });
    });

    describe('goodbye()', () => {
        it('should return a SkillResponse with goodbye message', () => {
            const result = controller.goodbye();
            expect(result.response.text).toBe(GOODBYE_MESSAGE);
            expect(result.response.end_session).toBe(true);
        });
    });
});