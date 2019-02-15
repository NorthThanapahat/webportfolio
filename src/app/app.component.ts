import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger,transition, group, query, style, animate} from '@angular/animations' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('SplashPage => HomePage',[
      
    ])
  ]
})
export class AppComponent implements OnInit{

  title = 'North\'s Works';
  mDataList:any[] = [];
  constructor(private http:HttpClient){

  }
  prepareRoute(outlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
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
