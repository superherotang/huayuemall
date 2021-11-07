import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  route: string = "";
  disabled: boolean = false;

  constructor(
    public navCtrl: NavController,
    public activeRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.route = params.ref;
    })
  }

  onClose() {
    if (this.route) {
      this.navCtrl.navigateBack(this.route);
      
    } else {
      this.navCtrl.navigateBack('/');
    }

  }

  onClickPhone() {
    let user: any = document.getElementsByClassName("user");
    let phone: any = document.getElementsByClassName("phone");
    user[0].style.display = "none";
    phone[0].style.display = "block";
  }
  onClickPwd() {
    let user: any = document.getElementsByClassName("user");
    let phone: any = document.getElementsByClassName("phone");
    user[0].style.display = "block";
    phone[0].style.display = "none";
  }
  onClickRegister() {
    this.navCtrl.navigateForward('/login/register');
  }

  onClickCode() {
    let codeBtn: any = document.getElementsByClassName("codeBtn")[0];
    let countdown = 10;

    interval(1000)
    .pipe((take(countdown + 1)))
    .subscribe(() => {
      console.log(countdown)
      if (countdown == 0) {

        this.disabled = false;
        codeBtn.innerText = "获取验证码";
        countdown = 10;
        return;
      } else {
        this.disabled = true;
        codeBtn.innerText = "重新发送(" + countdown + "s)";
        countdown--;
      }
    })
  }

}
