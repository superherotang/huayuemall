import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ware',
  templateUrl: './ware.page.html',
  styleUrls: ['./ware.page.scss'],
})
export class WarePage implements OnInit {

  goodsList = [
    {
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "1000.41",
      buyCount: "5000+"
    },
    {
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2000.02",
      buyCount: "5000+"
    },
    {
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "3500.52",
      buyCount: "5000+"
    }, {
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2110.00",
      buyCount: "5000+"
    }

  ]

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  onClickBack(): void {
    this.navCtrl.back();
  }
  onClickchangeView($event): void {
    console.log($event.target);
  }
  changeView():void{

  }

}
