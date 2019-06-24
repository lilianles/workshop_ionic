import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    movie: any;

  constructor(public navCTRL: NavController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.movie = params["movie"];
    });
  }

  ngOnInit() {
  }



}
