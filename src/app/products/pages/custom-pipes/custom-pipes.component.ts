import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent {

  //* 1. Uppercase First Pipe
  public phrase = 'tengo EL ORGULLO DE ser Peruano Y Soy FeliZ.';

}
