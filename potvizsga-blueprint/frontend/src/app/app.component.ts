import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Starwars } from './starwars';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  starwarses: Starwars[];
  starwars = new Starwars();

  constructor(private http: HttpClient,
    private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getStarwars().subscribe(starwars => {
      this.starwarses = starwars;
    });
  }

  delete(id) {
    this.starwarsService.delete(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  save(starwars) {
    this.starwarsService.save(starwars).subscribe(data => {
      this.ngOnInit();
    });
  }

}
