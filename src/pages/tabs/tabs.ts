import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OutPage } from '../out/out';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OutPage;
  tab3Root = AboutPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
