import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

   
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
    console.log(id)
    if(id=="^"){
      document.querySelector('ion-content').scrollToTop(500);
    }
    if(element){
      console.log(element)
      element.scrollIntoView();
    }

  }
}
