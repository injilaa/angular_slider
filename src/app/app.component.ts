import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test:number=0;
  i;
  onclick(){
if((this.test>=90)&&(this.test<100)){
        this.test+=5;
      }
    else if((this.test>=0)&&(this.test<90))
    {
      this.test+=2;
    }
    else{

    }
}
 onclick2(){

if((this.test>90)&&(this.test<=100)){
     this.test-=5;
   }
 else if((this.test>0)&&(this.test<=90))
 {
   this.test-=2;
 }
 else{

 }
//      for(this.i=0;this.i<=100;this.i++){
//    if(this.test<=90){
//      this.test=this.test-5;
//    }
//    else{ this.test=this.test-2;
//   }
// }
}

}
