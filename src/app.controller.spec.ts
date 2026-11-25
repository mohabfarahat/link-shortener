import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tap } from 'rxjs';
import { beforeEach, describe, it, expect } from '@jest/globals';
import { AppRepositoryHashMap } from './app.repository.hashmap';
import { AppRepositoryTag } from './app.repository';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: AppRepositoryTag, useClass: AppRepositoryHashMap },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('shorten', () => {
    it('should return an Observable string', (done) => {
      const url = 'mohab.com';
      appController
        .shorten(url)
        .pipe(tap((hash) => expect(hash).toBeTruthy()))
        .subscribe({ complete: done });
    });
  });
});
