import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesSerive: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesSerive.cacheStorage.byCapital.countries;
    this.initialValue = this.countriesSerive.cacheStorage.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;

    this.countriesSerive.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
