import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anketa',
  templateUrl: './anketa.component.html',
  styleUrls: ['./anketa.component.css']
})
export class AnketaComponent implements OnInit {
 /*  Class Names  */
  public content = 'allContent';
  public head = 'headInfo';
  public foto = 'blockFoto';
  public message = 'message left';
  public boxCentr = 'centr';
  public boxLeft = 'w_50 left';
  public boxRight = 'w_50 right';
  public boxNumb = 'numBox left';
  public boxSpan = 'text';
  public boxSpan20 = 'text w_20 left';
  public boxSpan30 = 'text w_30 left';
  public boxSpanAuto = 'text w_auto';
  public boxInput = 'dataInput';
  public boxInput20 = 'dataInput w_20 left';
  public boxInputAuto = 'dataInput w_auto left';
  /* Checkeds*/
  public checkOff = false;
  /* Inputs*/
  public inputUnit = {id: 'nameUnit', value: '..'};
  public inputsNames = [
    { id: 'lastName', value: '..'},
    { id: 'firstName', value: '..'}
  ];
  public inputsOldNames = [
    { id: 'lastNameOld', value: '..'},
    { id: 'firstNameOld', value: '..'}
  ];
  public inputNameDate = {id: 'lastNameDoc'};
  constructor() { }
  ngOnInit(): void {
  }

}
