// main.ts

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ToggleComponent } from './app/toggle/toggle.component';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const toogleElement = createCustomElement(ToggleComponent, {
    injector: app.injector,
  });

  customElements.define('my-toggle', toogleElement);

})();
