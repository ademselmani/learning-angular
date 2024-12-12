import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchValue: string ='';

  @Output()
  searchChanged = new EventEmitter<string>();

  changeSearchValue(eventData : Event){
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    this.searchChanged.emit(this.searchValue); //emit the updated search value
  }

}
