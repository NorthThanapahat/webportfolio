import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, stagger, animate, style, group, query , transition, keyframes} from '@angular/animations';
import { HomeComponent } from '../home/home.component';
// const query = (s,a,o={optional:true})=>q(s,a,o);

export const splashTransition = trigger('splashTransition', [
  transition(':enter', [
    query('.bg', style({ transform: 'translateX(0px)' }),{optional:true}),
  ]),
  transition(':leave', [
    query('.loader',[
      style({opacity:'1'}),
      animate('100ms',style({opacity:'0'}))
    ],{optional:true}),
    query('.bg', stagger(300, [
      style({ transform: 'translateX(0px)'}),
      animate('1s cubic-bezier(0.2,0.11,1,0.03)', style({transform: 'translateX(100%)'})),
    ]),{optional:true}),
    
  ])
]);

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
   styleUrls: ['./splash-screen.component.css'],
  animations: [ splashTransition ],
  host: {
    '[@splashTransition]': ''
  }
})

export class SplashScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setInterval(() => {
      this.router.navigate(['/home']);
        
    },2000)
  }
}
