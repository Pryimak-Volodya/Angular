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
  public buroCheck = {id: 'buro', isOff: false };
  public frontCheck = {id: 'front', isOff: false };
  public predCheck = {id: 'pred', isOff: false };
  public orgaCheck = {id: 'orga', isOff: false };
  public otherCheck = {id: 'other', isOff: false };
  public dayData = {id: 'dayData'};
  public punkt1 = 'punkt1';
  public punkt2 = 'punkt2';
  public punkt3 = 'punkt3';
  public punkt4 = 'punkt4';
  public punkt5 = 'punkt5';
  public punkt6 = 'punkt6';
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
  public fourth = [
    {id: 'fourth1'},
    {id: 'fourth2'},
    {id: 'fourth3'},
    {id: 'fourth4'}
  ];
  public fifth = [
    {id: 'fifth1'},
    {id: 'fifth2'},
    {id: 'fifth3'},
    {id: 'fifth4'},
    {id: 'fifth5'}
  ];
  public sixth = [
    {id: 'sixth1'},
    {id: 'sixth2'},
    {id: 'sixth3'},
    {id: 'sixth4'},
    {id: 'sixth5'}
  ];
  public coment = {id: 'coment' };
  public srartColor = 'srartColor';
  public statusBlock = 'none';
  // tslint:disable-next-line:typedef
  onCheck(event){
    this.srartColor = 'checkColor';
  }
  // tslint:disable-next-line:typedef
  onCheckPunkt(event){
    this.statusBlock = 'block';
  }
  constructor() { }
  ngOnInit(): void {
  }
}
