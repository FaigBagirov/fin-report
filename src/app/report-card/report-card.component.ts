import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {
  //Arguments from the parent component
  @Input() operationType!: string;
  @Input() countOfOperations!: number;
  @Input() tabNo!: number;

  generateRoute(tab: number){
    return "navigator?tab=" + this.tabNo;
  }

  ngOnInit(): void {
  }

}
