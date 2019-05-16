import { Component } from "@angular/core";
import { ExcelService } from "./shared/excel.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  columnDefs = [
    { headerName: "Make", field: "make", sortable: true, filter: true },
    { headerName: "Model", field: "model", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true }
  ];

  rowData: any;
  constructor(private excelService: ExcelService, private http: HttpClient) {}
  // data: any = [
  //   {
  //     name: "gary",
  //     Age: 23,
  //     company: "NSEL"
  //   },
  //   {
  //     name: "Glitter",
  //     Age: 23,
  //     company: "NSEL"
  //   },
  //   {
  //     name: "Charles",
  //     Age: 23,
  //     company: "NSEL"
  //   }
  // ];

  dataExport: any;
  ngOnInit() {
    this.rowData = this.http.get("https://api.myjson.com/bins/15psn9");
    //console.log(this.data);
    this.http.get("https://api.myjson.com/bins/15psn9").subscribe(data1 => {
      this.dataExport = data1;
    });
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.dataExport,"ExcelTestGary");
  }
}
