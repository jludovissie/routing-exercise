import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  idx;
  switchMode= false;

  constructor(private router:Router ,
              private route: ActivatedRoute) { }
  ngOnInit() {}

  onContact(){
    this.router.navigate(['contact']), { relativeTo: this.route  };
  }
  onAbout(){
    this.router.navigate(['home']), { relativeTo: this.route };
  }
  onSwitch(){
    this.switchMode = !this.switchMode
  }
}
