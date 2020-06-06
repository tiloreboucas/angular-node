import { browser, by, element } from 'protractor';
import { OnInit} from '@angular/core';

export class AppPage implements OnInit {
  ngOnInit() {
    console.log('Inicialized');
  }

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
