import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../report-data.service';

@Component({
  //i use standard generated selectors just for safety, to avoid name conflicts with html tags
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reportsData!: any[]; //I don't like to use "any" in the Typescript, but it saves me time in this case
  countOfOTransactions: number;

  //This array could be generated by some "create report" form (with checkboxes for example) 
  //where report specialist can choose all operation types he wants to see
  operationTypes = ["income", "investment", "outcome", "loan"];

  //It could be done with regex or just with mapping two arrays or with an object keys
  //but I've chosen this just because I like it to be universal and because I'm not good at regex coding
  opNameBeautify(opType: string){
    if (opType.slice(-1) !== "s"){
      opType+='s';
    }    
    return opType.charAt(0).toUpperCase() + opType.slice(1);
  }
  //I couldn't thinks of a better method than just counting all occurences in the JSON file
  getNumOfOps(operationType: string){
    let opsCount = 0;
    this.reportsData.forEach((operation)=>{
      if(operation.type === operationType){
        opsCount++;
      }
    });
    return opsCount;
  }
  constructor(service: ReportDataService) {
    //Here it should be requesting each report type from the backend, but the task doesn't involve that,
    //so I've just simplified the code. 
    this.countOfOTransactions = service.getReportTotal();
    this.reportsData = service.getReportsData();
   }
  ngOnInit(): void {
  }
}