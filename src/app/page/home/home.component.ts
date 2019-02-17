import { Component, OnInit } from '@angular/core';
import { trigger, stagger, animate, style, group, query as q, transition, keyframes } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);

// trigger('homeTransition',[
//   transition(':enter',[
//     query('.home',[
//       style({transform:'translateX(-500px)'}),
//       animate('1s cubic-bezier(0.2,0.11,1,0.03)',style({transform:'translateX(0px)'}))
//     ]),
//   ])
// ])
export const homeTransition = trigger('homeTransition', [
  transition(':enter', [
    query('.circle', style({ opacity: 0 })),
    query('.circle',  [
      style({ top: '55%' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({top: '50%', opacity: 1})),
    ]),
  ]),
 
]);

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ homeTransition ],
  host: {
    '[@homeTransition]': ''
  }

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
