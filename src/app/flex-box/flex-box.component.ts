import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flex-box',
  templateUrl: './flex-box.component.html',
  styleUrls: ['./flex-box.component.scss']
})
export class FlexBoxComponent implements OnInit {
  showBasic: boolean;
  showJustify: boolean;
  showItems: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  determineBackground(bool) {
    return bool ? '#4cafff' : '#163957';
  }

}
