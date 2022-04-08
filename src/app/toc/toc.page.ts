import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "P1 | Chapter 1 | What if... Ben Affleck did not play Batman",
      url: "/chapter1"
    },
    {
      title: "P35 | Chapter 2 | What if... Amber Heard was fired from Aquaman",
      url: "/chapter2"
    },
    {
      title: "P96 | Chapter 3 | What if... Grant Gustin was casted for the DCEU Flash",
      url: "/chapter3"
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
