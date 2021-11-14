import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public searchContent: string = "";

  keyList = [
    {
      key: "测试1"
    },
    {
      key: "测试2"
    },
    {
      key: "测试3"
    },
    {
      key: "测试4"
    },
    {
      key: "测试5"
    },
    {
      key: "测试6"
    },
    {
      key: "测试7"
    },
    {
      key: "测试8"
    },
    {
      key: "测试9"
    },
    {
      key: "测试10"
    }
  ]
  constructor(public modalCtrl: ModalController,
    public navCtrl: NavController) { }

  ngOnInit() { }

  onClickBack(): void {
    this.modalCtrl.dismiss();
  }
  onClickSearchBtn(): void {
    this.modalCtrl.dismiss();

  }
  onSearchChange(): void {
    let wordSearch: any = document.getElementsByClassName("word-search")[0];
    let searchList: any = document.getElementsByClassName("search-list")[0];
    if (this.searchContent == "") {
      wordSearch.style.display = "block";
      searchList.style.display = "none";
    } else {
      wordSearch.style.display = "none";
      searchList.style.display = "block";
    }
  }
  onClickSearchItem(key): void {
  //跳转列表页
    this.navCtrl.navigateForward("/ware/"+key);
    this.modalCtrl.dismiss();
  }

}
