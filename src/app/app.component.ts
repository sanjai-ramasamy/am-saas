import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { DynamicCardComponent } from './dynmaic-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step:any = 0;
  color = '#5d36e0';
  mode = 'determinate';
  value = 0;
  bufferValue = 75;
  curSec:number =0;
  @ViewChild("file") file : any | ElementRef;
  isLoading: boolean = false;
  @ViewChild('snav') snav: any;
  @ViewChild(DynamicCardComponent)
 private dynamicCardComponent: DynamicCardComponent;
   i:any = 0;

   dataFromChild:any;
  eventFromChild(data:any) {
    this.dataFromChild = data;
    this.snav.toggle();
    console.log(data)
  }
 changeContent() {
    this.dynamicCardComponent.change(this.dataFromChild);
  }
  onUpload(){
    const e: HTMLElement = this.file.nativeElement;
    e.click();
  }

  onSelect(e:any){
    this.startTimer(1);
    this.isLoading = true;
  }

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.value = 100 - sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        this.isLoading = false;
        this.step = 2;
        sub.unsubscribe();
      }
    });
  }

  
  
  showCardView: boolean = false;


 
}
