import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
user: {id: string, name: string}
urlSubscription: Subscription; 

constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.user = {
  id: this.route.snapshot.params['id'],
  name: this.route.snapshot.params['name']
   } 
  this.route.params.subscribe(
    () =>{
      (params: Params) => {
        this.user.id = params['id'],
        this.user.name = params['name']
      }
    }
  ); 
}
ngOnDestroy(){
  this.urlSubscription.unsubscribe();
}

}