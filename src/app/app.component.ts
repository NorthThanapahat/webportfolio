import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild} from '@angular/animations';
// const query = (s,a,o={optional:true})=>q(s,a,o);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('routeAnimation',[
      transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%' }),{optional:true}),
        query(':enter', style({ transform: 'translateX(100%)' }),{optional:true}),
        sequence([
          query(':leave', animateChild(),{optional:true}),   

          group([
            query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', 
                style({ transform: 'translateX(100%)' }))
            ],{optional:true}),
            query(':enter', [
              style({ transform: 'translateX(0%)' }),
              // animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', 
              //   style({ transform: 'translateX(0%)' }))
            ],{optional:true}),
          ]),

          query(':enter', animateChild(),{optional:true}),


        ])
      ]),
    ])
  ]
})
export class AppComponent implements OnInit{

  title = 'North\'s Works';
  mDataList:any[] = [];
  constructor(private http:HttpClient){

  }
  prepareRoute(outlet){
    console.log(outlet);
    return outlet.activatedRouteData.animation;
  }
  // GetDataList(){
  //   this.http.get<any>('http://localhost:3000/api/dataList').subscribe(result=>{
  //     this.mDataList = result.data;
  //     console.log(result);
  //   });
  // } 
  // onSubmit(data){
  //   this.http.post<any>('http://localhost:3000/api',data).subscribe(result=>{
  //     this.GetDataList();
  //   });
  // }
  ngOnInit(): void {
    // this.GetDataList();
  }
}
