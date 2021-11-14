import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ware',
  templateUrl: './ware.page.html',
  styleUrls: ['./ware.page.scss'],
})
export class WarePage implements OnInit {

  cols:number=6;

  goodsList = [
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "1000.41",
      buyCount: "5000+"
    },
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2000.02",
      buyCount: "5000+"
    },
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "3500.52",
      buyCount: "5000+"
    },
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2110.00",
      buyCount: "5000+"
    },
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2110.00",
      buyCount: "5000+"
    },
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2110.00",
      buyCount: "5000+"
    },
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2110.00",
      buyCount: "5000+"
    },
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2110.00",
      buyCount: "5000+"
    },
    {
      goodsID:"123",
      goodsImg: "../../../assets/images/skill.png",
      goodsTitle: "阿斯弗安抚阿斯弗阿三阿斯弗啊沙发沙发阿斯三阿",
      goodsPrice: "2110.00",
      buyCount: "5000+"
    },

  ]

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  onClickBack(): void {
    this.navCtrl.back();
  }
  onClickchangeView($event): void {
    let viewBtn=document.getElementsByClassName("ware-to-switch-button")[0];
    let goodsList=document.getElementsByClassName("ware-goods-list")[0];
    let currentState=viewBtn.innerHTML;
    if(currentState=="1"){
      viewBtn.innerHTML="2";
      this.cols=12
      goodsList.classList.remove("cols-2");
      goodsList.classList.add("cols-1");
    }
    if(currentState=="2"){
      viewBtn.innerHTML="1";
      this.cols=6
      goodsList.classList.remove("cols-1");
      goodsList.classList.add("cols-2");
    }
    
    
    
    
  }
  changeView():void{

  }

}
