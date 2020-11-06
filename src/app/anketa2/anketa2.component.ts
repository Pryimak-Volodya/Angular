import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anketa2',
  templateUrl: './anketa2.component.html',
  styleUrls: ['./anketa2.component.css']
})
export class Anketa2Component implements OnInit {
  public content = 'allContent';
  public boxHead = 'headbox';
  public infoContent = 'infoContent';
  public question = 'question';
  public buroCheck = {id: 'buro', isOff: false};
  public frontCheck = {id: 'front', isOff: false};
  public predCheck = {id: 'pred', isOff: false};
  public orgaCheck = {id: 'orga', isOff: false};
  public otherCheck = {id: 'other', isOff: false};
  public dayData = {id: 'dayData'};
  public punkt1 = {class: 'punkt1', statusBlock: false};
  public punkt2 = {class: 'punkt2', statusBlock: false};
  public punkt3 = {class: 'punkt3', statusBlock: false};
  public punkt4 = {class: 'punkt4', statusBlock: false};
  public punkt5 = {class: 'punkt5', statusBlock: false};
  public punkt6 = {class: 'punkt6', statusBlock: false};
  public first = [
    {id: 'first1'},
    {id: 'first2'},
    {id: 'first3'}
  ];
  public second = [
    {id: 'second1'},
    {id: 'second2'}
  ];
  public third = [
    {id: 'third1'},
    {id: 'third2'},
    {id: 'third3'},
    {id: 'third4'},
    {id: 'third5'}
  ];
  public fourth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public fifth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public sixth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public srartColor = 'srartColor';
  // tslint:disable-next-line:typedef
  onCheckColor(event){
    if (this.punkt1.statusBlock) {
      this.punkt1.statusBlock = false;
      this.srartColor = 'srartColor';
    } else {
      this.punkt1.statusBlock = true;
      this.srartColor = 'checkColor';
      this.frontCheck.isOff = true;
    }
  }
  // tslint:disable-next-line:typedef
  onCheckPunkt1(event){
    if (this.punkt4.statusBlock) {
      this.punkt4.statusBlock = false;
    }
    else {
      this.punkt4.statusBlock = true;
    }
  }
  // tslint:disable-next-line:typedef
  onCheckPunkt2(event){
    if (this.punkt2.statusBlock) {
      this.punkt2.statusBlock = false;
    }
    else {
      this.punkt2.statusBlock = true;
    }
  }
  // tslint:disable-next-line:typedef
  onCheckPunkt3(event){
    if (this.punkt3.statusBlock) {
      this.punkt3.statusBlock = false;
    }
    else {
      this.punkt3.statusBlock = true;
    }
  }
  // tslint:disable-next-line:typedef
  onCheckPunkt4(event){
      this.punkt5.statusBlock = true;
  }
  // tslint:disable-next-line:typedef
  onCheckPunkt5(event){
    this.punkt6.statusBlock = true;
  }
  constructor() { }
  ngOnInit(): void {
  }
}
