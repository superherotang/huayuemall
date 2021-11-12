import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';


SwiperCore.use([Pagination]);


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private goodsId: string;

  goodsImgList = [
    {
      "img": "../../assets/images/banner1.jpg"
    },
    {
      "img": "../../assets/images/banner1.jpg"
    },
    {
      "img": "../../assets/images/banner1.jpg"
    },
    {
      "img": "../../assets/images/banner1.jpg"
    },
    {
      "img": "../../assets/images/banner1.jpg"
    },
    {
      "img": "../../assets/images/banner1.jpg"
    },
    {
      "img": "../../assets/images/banner1.jpg"
    },
    {
      "img": "../../assets/images/banner1.jpg"
    },
    {
      "img": "../../assets/images/banner1.jpg"
    }

  ]
  constructor(private routerinfo: ActivatedRoute,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.goodsId = this.routerinfo.snapshot.params['goodsId']
  }

  onClickBack(): void {
    this.navCtrl.back();
  }
}
