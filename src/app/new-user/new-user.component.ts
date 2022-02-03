import { Component, Output } from "@angular/core";

@Component ({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent {
  title = 'NewUserComponent';

  name: string = '';
  email: string = '';

  public save() {
    alert('Salvar usuário com o nome: ' + this.name + ' e email: ' + this.email);
    this.clearFields();
  }

  private clearFields() {
    this.name = '';
    this.email = '';
  }
}
