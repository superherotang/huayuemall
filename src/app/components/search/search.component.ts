import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(public modalCtrl: ModalController,
    public navCtrl: NavController) { }

  ngOnInit() { }

  onClickBack(): void {
    this.modalCtrl.dismiss();
  }
  onClickSearchBtn(): void {
    this.modalCtrl.dismiss();

  }

}
