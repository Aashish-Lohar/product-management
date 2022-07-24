import { Component, Input, OnChanges, OnInit, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating!:number;
  @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>()
  cropWidth:number=90;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.cropWidth=this.rating*90/5;
  }
  onClick(){
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`)
  }

}
