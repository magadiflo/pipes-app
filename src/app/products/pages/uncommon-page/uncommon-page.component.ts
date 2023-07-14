import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {

  //i18nSelect Pipe --------------------------------
  public name: string = 'Martín';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeClient():void {
    this.name = 'María';
    this.gender = 'female';
  }

  //i18nPlural Pipe ---------------------------------
  public clients: String[] = ['Martín', 'María', 'Mercedes', 'Mirtha'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  removeClient(): void {
    this.clients.splice(0, 1);
  }

}
