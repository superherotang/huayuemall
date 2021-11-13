import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay,SwiperOptions, Pagination, FreeMode, Scrollbar } from 'swiper';
import {location } from '../app.config'


SwiperCore.use([Autoplay,Pagination, FreeMode, Scrollbar]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {

  location:string=location

  bannerConfig: SwiperOptions = {//轮播图属性
    pagination: { clickable: true },
    speed: 400,
    autoplay: {
      delay: 1000, //自动轮播时间
      disableOnInteraction: false//这个属性很关键，拖动完自动播放
    },
    loop: true //循环
  }

  miaoshaConfig: SwiperOptions = {//轮播图属性
    slidesPerView: 5,
    freeMode: true,

    /*滚动条
    scrollbar: {
      draggable: false,
    },
    */
  }
  bannerList = [
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

  menuList = [
    {
      path: '/tabs/home',
      img: "../../assets/images/menuimg1.png",
      menuName: "超市"
    },
    {
      path: '/tabs/cart',
      img: "../../assets/images/menuimg1.png",
      menuName: "数码"
    },
    {
      path: '/login',
      img: "../../assets/images/menuimg1.png",
      menuName: "秒杀"
    },
    {
      path: '/tabs/user',
      img: "../../assets/images/menuimg1.png",
      menuName: "生鲜"
    },
    {
      path: '/tabs/user',
      img: "../../assets/images/menuimg1.png",
      menuName: "生鲜"
    },
    {
      path: '/tabs/user',
      img: "../../assets/images/menuimg1.png",
      menuName: "生鲜"
    },
    {
      path: '/tabs/user',
      img: "../../assets/images/menuimg1.png",
      menuName: "生鲜"
    },
    {
      path: '/tabs/user',
      img: "../../assets/images/menuimg1.png",
      menuName: "生鲜"
    }

  ]

  miaoshaList = [
    {
      img: "../../assets/images/banner1.jpg",
      price: 15
    },
    {
      img: "../../assets/images/banner1.jpg",
      price: 15
    },
    {
      img: "../../assets/images/banner1.jpg",
      price: 15
    },
    {
      img: "../../assets/images/banner1.jpg",
      price: 15
    },
    {
      img: "../../assets/images/banner1.jpg",
      price: 15
    },
    {
      img: "../../assets/images/banner1.jpg",
      price: 15
    },
    {
      img: "../../assets/images/banner1.jpg",
      price: 15
    },
    {
      img: "../../assets/images/banner1.jpg",
      price: 15
    }

  ]

  goodsList = [
    {
      path: '123',
      img: "../../assets/images/menuimg1.png",
      describe: "科瑞宝士(CURAPROX)瑞士进口牙刷 超细软毛牙刷5460 单支颜色随机",
      price:1000
    },
    {
      path: '123',
      img: "../../assets/images/menuimg1.png",
      describe: "科瑞宝士(CURAPROX)瑞士进口牙刷 超细软毛牙刷5460 单支颜色随机",
      price:2000
    },
    {
      path: '123',
      img: "../../assets/images/menuimg1.png",
      describe: "【满300 减200】三只松鼠休闲零食每日坚果干果开口松子100g\/160g坚果炒货东北手剥红松子 100g",
      price:3000
    },
    {
      path: '123',
      img: "../../assets/images/menuimg1.png",
      describe: "【满300 减200】三只松鼠休闲零食每日坚果干果开口松子100g\/160g坚果炒货东北手剥红松子 100g",
      price:4000
    },

  ]
  constructor() {

  }

  ngOnInit() {
  }
  ngAfterViewInit() {


  }
}
