import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Cadastro', url: '/cadastro', icon: 'person-add' },
    { title: 'Ticket', url: '/ticket', icon: 'ticket' },
    { title: 'Feedback', url: '/feedback', icon: 'thumbs-up' },
    { title: 'Contratações anteriores', url: '/contratosanteriores', icon: 'folder' },
    { title: 'Agenda', url: '/agenda', icon: 'folder' },
    { title: 'Pagamento', url: '/pagamento', icon: 'folder' },
    { title: 'Chat', url: '/chat', icon: 'folder' },
    { title: 'Sair', url: '/login', icon: 'exit' },
  ];
  public labels = [];
  constructor() {}
}
