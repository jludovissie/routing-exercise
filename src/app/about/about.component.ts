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

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      
      });
  }
  onContact(){
    this.router.navigate(['contact']), { relativeTo: this.route  };
  }
  onAbout(){
    this.router.navigate(['home']), { relativeTo: this.route };
  }
  onSwitch(){
    this.switchMode = !this.switchMode
  }
  routeWithQueryParams($event) {
    const selectedRoute = $event.target.innerHTML;
    if (selectedRoute == 'bob') {
      this.router.navigate(['/bob'], { queryParams: { val: 'Bob' }});
    } else {
      this.router.navigate(['/susan'], { queryParams: { val: 'Susan' }});
    }
  }
}
