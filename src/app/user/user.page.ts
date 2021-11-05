import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public navCtrl: NavController,
    private myRouter: Router) { }

  ngOnInit() {
  
  }

  async showLogin() {
    await this.navCtrl.navigateForward('/login', {
      queryParams: {
        ref: this.myRouter.url
      }
    }
    );
  }
}
