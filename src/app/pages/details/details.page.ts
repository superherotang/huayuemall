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


  private goodsId: string;  //商品ID
  isShow: boolean = false;  //是否弹出mask

  @ViewChild("goodsImg") goodsImg: ElementRef;
  @ViewChild('mask', { static: false })
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
    //图片展示高度
    let width: any = document.body.clientWidth;
    let widthpx: any = width + "px";
    this.goodsImg.nativeElement.style.height = widthpx;


  }
  //弹出mask
  onClickMore(): void {
    this.maskComponent.showMask(true);
  }

  //商品详情
  onGoodsDetail(): void {
    this.tabShow(1);
  }
  //商品规格
  onGoodsSpec(): void {
    this.tabShow(2);
  }
  //售后保障
  onGoodsGuarantee(): void {
    this.tabShow(3);
  }

  //tab展示
  tabShow(num: number): void {
    let goodsDetail: any = document.getElementsByClassName("goods-detail")[0];
    let goodSpec: any = document.getElementsByClassName("good-spec")[0];
    let goodsGuarantee: any = document.getElementsByClassName("goods-guarantee")[0];
    switch (num) {
      case 1:
        goodsDetail.style.display = "block";
        goodSpec.style.display = "none";
        goodsGuarantee.style.display = "none";
        break;
      case 2:
        goodsDetail.style.display = "none";
        goodSpec.style.display = "block";
        goodsGuarantee.style.display = "none";
        break;
      case 3:
        goodsDetail.style.display = "none";
        goodSpec.style.display = "none";
        goodsGuarantee.style.display = "block";
        break;
      default:
        break;
    }
  }

}
