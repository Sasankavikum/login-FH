import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = null;

  onClick() {
    axios
      .get('http://demo.dreamsquadgroup.com/test/index.json')
      .then((res) => {
        this.data = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
