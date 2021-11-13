import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';

import { MaskComponent } from '../../modules/mask/mask.component'

SwiperCore.use([Pagination]);


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsPage implements OnInit, AfterViewInit {


  enableBackdropDismiss = true;
  showBackdrop = true;
  shouldPropagate = true;
  private goodsId: string;
  isShow: boolean = false;

  @ViewChild("goodsImg") goodsImg: ElementRef;
  @ViewChild('mask', {static: false})
  public maskComponent: MaskComponent;

  bannerConfig: SwiperOptions = {//轮播图属性
    pagination: {
      type: 'fraction',
      bulletClass: 'my-bullet'
    },
  }
  goodsImgList = [
    {
      "img": "../../assets/images/asd.png"
    },
    {
      "img": "../../assets/images/asd.png"
    },
    {
      "img": "../../assets/images/asd.png"
    },
    {
      "img": "../../assets/images/asd.png"
    },
    {
      "img": "../../assets/images/asd.png"
    }

  ]
  constructor(private routerinfo: ActivatedRoute,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.goodsId = this.routerinfo.snapshot.params['goodsId'];

  }

  onClickBack(): void {
    this.navCtrl.back();
  }
  ngAfterViewInit(): void {
    let width = window.screen.width
    console.log(width);
    let widthpx = width + "px";
    this.goodsImg.nativeElement.style.height = widthpx

  }
  onClickMore(): void {
    this.maskComponent.showMask(true);
    
  }

}
