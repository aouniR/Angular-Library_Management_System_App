import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {

  // the commandSent attribute used to resend the event when comandComponent clicked to the parent which is the dashboardComponent
  @Output() commandSent = new EventEmitter();

  // the event binding method called by the parent
  sendCommandtoDashboard(selectedCommand : any){
    this.commandSent.emit(selectedCommand)
    console.log("clicked the command")
  }
}
