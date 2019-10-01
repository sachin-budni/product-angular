import { Component, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { HttpClient } from '@angular/common/http';
import { AuthService } from './service/auth.service';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){}


  ngOnInit(): void {
  }

  // title = 'UIProduct';
  // private chart: am4charts.XYChart;
  // constructor(private zone: NgZone,private http : HttpClient){}

  // ngAfterViewInit() {
  //   this.zone.runOutsideAngular(() => {
  //     let d1 = {};
  //     this.http.get("http://localhost:7000/get/all/messages").subscribe((d:[])=>{
  //       d.forEach(element => {
  //         if(d1[new Date(element["date"]).toDateString()]){
  //           d1[new Date(element["date"]).toDateString()].push(element);
  //         }else{
  //           d1[new Date(element["date"]).toDateString()]  =[element]
  //         }
  //       });
  //       let chart = am4core.create("chartdiv", am4charts.XYChart);
  
  //       chart.paddingRight = 20;
  
  //       let data = [];
  //       let visits = 10;
  //       for(let d2 in d1){
  //         console.log(d2)
  //         data.push({ date: d2, name: "name :" + d2, value: d1[d2].length });
  //       }
  
  //       chart.data = data;
  
  //       let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  //       dateAxis.renderer.grid.template.location = 0;
  
  //       let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  //       valueAxis.tooltip.disabled = true;
  //       valueAxis.renderer.minWidth = 35;
  
  //       let series = chart.series.push(new am4charts.LineSeries());
  //       series.dataFields.dateX = "date";
  //       series.dataFields.valueY = "value";
  
  //       series.tooltipText = "{valueY.value}";
  //       chart.cursor = new am4charts.XYCursor();
  
  //       let scrollbarX = new am4charts.XYChartScrollbar();
  //       scrollbarX.series.push(series);
  //       chart.scrollbarX = scrollbarX;
  
  //       this.chart = chart;
  //     })
  //   });
  // }
  // ngOnDestroy() {
  //   this.zone.runOutsideAngular(() => {
  //     if (this.chart) {
  //       this.chart.dispose();
  //     }
  //   });
  // }
}
