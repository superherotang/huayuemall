import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
})
export class MaskComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.showMask(false);
  }

  public showMask(isShow:boolean){
    let mask: any = document.getElementsByClassName("mask")[0];
    if (isShow) {
      mask.style.display = "block";
    } else {
      mask.style.display = "none";
    }
  }
}
