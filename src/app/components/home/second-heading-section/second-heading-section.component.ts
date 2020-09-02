import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-heading-section',
  templateUrl: './second-heading-section.component.html',
  styleUrls: ['./second-heading-section.component.scss']
})
export class SecondHeadingSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toParkings(){
    this.router.navigateByUrl('parkings');
  }
}
