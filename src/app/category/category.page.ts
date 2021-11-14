import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchComponent } from '../components/search/search.component'

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  menuList = [
    {
      menuName: "测试菜单1",
      nameList:[
        {
          categoryName:"测试菜单1分类"
        }
      ]
    }, {
      menuName: "测试菜单2"
    }, {
      menuName: "测试菜单3"
    }, {
      menuName: "测试菜单4"
    }, {
      menuName: "测试菜单5"
    }, {
      menuName: "测试菜单6"
    }, {
      menuName: "测试菜单7"
    }, {
      menuName: "测试菜单8"
    }, {
      menuName: "测试菜单9"
    }, {
      menuName: "测试菜单10"
    }, {
      menuName: "测试菜单11"
    }, {
      menuName: "测试菜单12"
    }, {
      menuName: "测试菜单13"
    },{
      menuName: "测试菜单14"
    },{
      menuName: "测试菜单15"
    },
  ]

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async onClickSearch(){
    const modal = await this.modalController.create({
      component: SearchComponent,
      animated:false
    });
    return await modal.present();
  }

}
