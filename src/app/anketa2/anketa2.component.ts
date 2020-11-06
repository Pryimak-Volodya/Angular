import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anketa2',
  templateUrl: './anketa2.component.html',
  styleUrls: ['./anketa2.component.css']
})
export class Anketa2Component implements OnInit {
  public content ='allContent';
  public boxHead = 'headbox';
  public infoContent = 'infoContent';
  public buroCheck = {id: 'buro', isOff: false, value:''};
  public frontCheck = {id: 'front', isOff: false, value:''};
  public predCheck = {id: 'pred', isOff: false, value:''};
  public orgaCheck = {id: 'orga', isOff: false, value:''};
  public otherCheck = {id: 'other', isOff: false, value:''};
  public dayData = {id: 'dayData'};
  public punkt1 = {class:'punkt1'};
  public punkt2 = {class:'punkt2', statusBlock: 'none'};
  public punkt3 = {class:'punkt3', statusBlock: 'none'};
  public punkt4 = {class:'punkt4', statusBlock: 'none'};
  public punkt5 = {class:'punkt5', statusBlock: 'block'};
  public punkt6 = {class:'punkt6', statusBlock: 'block'};
  public first = [
    {id:'first1'},
    {id:'first2'},
    {id:'first3'}
  ];
  public second = [
    {id:'second1'},
    {id:'second2'}
  ];
  public third = [
    {id:'third1'},
    {id:'third2'},
    {id:'third3'},
    {id:'third4'},
    {id:'third5'}
  ];
  public fourth = [
    {id:'fourth1'},
    {id:'fourth2'},
    {id:'fourth3'},
    {id:'fourth4'}
  ];
  public fifth = [
    {id:'fifth1'},
    {id:'fifth2'},
    {id:'fifth3'},
    {id:'fifth4'}, 
    {id:'fifth5'}
  ];
  public sixth = [
    {id:'sixth1'},
    {id:'sixth2'},
    {id:'sixth3'},
    {id:'sixth4'}, 
    {id:'sixth5'}
  ];
  public coment = {id: 'coment', value:''};
  public srartColor = 'srartColor';
  onCheckColor(event){
    this.srartColor = 'checkColor';
  }
  onCheckPunkt1(event){
    this.punkt4.statusBlock = 'block';
  }
  onCheckPunkt2(event){
    this.punkt2.statusBlock = 'block';
  }
  onCheckPunkt3(event){
    this.punkt3.statusBlock = 'block';
  }
  constructor() { }
  ngOnInit(): void {
  }
}
