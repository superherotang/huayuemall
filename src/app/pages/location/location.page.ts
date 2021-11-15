import { Component, OnInit,ViewChild, } from '@angular/core';
import { NavController,IonContent } from '@ionic/angular';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  @ViewChild("Content") content: IonContent;
  arr:string[];
  

  constructor(public navCtrl: NavController) {

    
   }
  
  ngOnInit() {
    this.arr = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
    this.arr.unshift("^");
  }
  onback(): void {
    this.navCtrl.back();

  }
  scrollIntoView(id: string):void {
    let element = document.getElementById(id);
    if(id=="^"){
      this.content.scrollToTop(500);
    }
    if(element){
      element.scrollIntoView();
    }

  }
}
