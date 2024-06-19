import { Component, OnInit } from '@angular/core';
import { FitbitService } from './fitbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Fitbit Dashboard';
  bestDistance: any;
  bestFloors: any;
  bestSteps: any;
  bestActiveMinutes: any;

  lifetimeDistance: any;
  lifetimeFloors: any;
  lifetimeSteps: any;
  lifetimeActiveScore: any;
  lifetimeCaloriesOut: any;

  constructor(private dataService: FitbitService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.bestDistance = data.best.total.distance;
      this.bestFloors = data.best.total.floors;
      this.bestSteps = data.best.total.steps;
      this.bestActiveMinutes = data.best.total.activeMinutes || { value: 'N/A', date: 'N/A' };

      this.lifetimeDistance = data.lifetime.total.distance;
      this.lifetimeFloors = data.lifetime.total.floors;
      this.lifetimeSteps = data.lifetime.total.steps;
      this.lifetimeActiveScore = data.lifetime.total.activeScore;
      this.lifetimeCaloriesOut = data.lifetime.total.caloriesOut;
    });
  }
}
