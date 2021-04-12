import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UnsplashService } from 'src/app/core/service/unsplash.service';

@Component({
  selector: 'app-buscador-unsplash',
  templateUrl: './buscador-unsplash.component.html',
  styleUrls: ['./buscador-unsplash.component.css']
})
export class BuscadorUnsplashComponent implements OnInit {

  total: number;
  results;

  queryText = new FormControl('');

  constructor(public unsplashService: UnsplashService) { }

  ngOnInit() {
  }

  onClickSearch() {

    if (this.isQueryTextFull()) {
      this.unsplashService.search(this.queryText.value).subscribe((data => {
        console.log(data);
        this.results = data.results;
        this.total = data.total;
      }));
    }
  }

  isQueryTextFull() {
    let isFull = false;

    if (this.queryText && this.queryText.value) {
      isFull = true;
    } else {
      alert('Debe rellenar un término de búsqueda');
    }

    return isFull;
  }
}


