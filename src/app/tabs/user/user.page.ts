import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  menuList = [
    {
      path: '/tabs/home',
      img: "../../assets/images/menuimg1.png",
      menuName: "待付款"
    },
    {
      path: '/tabs/cart',
      img: "../../assets/images/menuimg1.png",
      menuName: "待收货"
    },
    {
      path: '/login',
      img: "../../assets/images/menuimg1.png",
      menuName: "待使用"
    },
    {
      path: '/tabs/user',
      img: "../../assets/images/menuimg1.png",
      menuName: "待评价"
    },
    {
      path: '/tabs/user',
      img: "../../assets/images/menuimg1.png",
      menuName: "售后"
    }

  ]


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
