import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../models/Filter.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {

  private filtersSubscription$: Subscription;
  filters: Array<Filter> = new Array<Filter>();

  constructor( private filterService: FilterService ) { }

  ngOnInit(): void {
    console.log('componente filtros');
    this.filtersSubscription$ = this.filterService.filters$.subscribe(
      (filters: Array<Filter>) => this.filters = filters
    );
  }

  ngOnDestroy(): void {
    console.log('Destroy component Filters');
    this.filtersSubscription$.unsubscribe();
  }

  public applyFilters(): void {
    this.filterService.applyFilters();
  }

  public showElements(filter: any): void {
    this.filterService.showElements(filter);
  }

  public activateFilters(element: any): boolean {
    const activate: boolean = this.filterService.activateFilters(element);
    return activate;
  }

  public addFilter(filterElement: any, filterName: string): void {
    this.filterService.addFilter(filterElement, filterName);
  }

  public showButton(filter: Filter): boolean {
    const show: boolean = this.filterService.showButton(filter);
    return show;
  }

}
