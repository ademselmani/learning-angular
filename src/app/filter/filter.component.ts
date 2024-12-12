import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
  @Input() All : number = 0;
  @Input() Available : number = 0;
  @Input() NotAvailable : number = 0;

  @Output() 
  filterChanged =new EventEmitter<string>();

  onFilterChange(filter: string){
    this.filterChanged.emit(filter);
  }

}
