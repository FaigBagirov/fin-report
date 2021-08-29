import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @Input()
  countOfOTransactions!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
