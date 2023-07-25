import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    // the command attribute used to charge the event msg recieved and bind it with the child component which is the command-details component
  @Output() command: any

    // the commandToDetails() method is used to handle the event from the list component and charge the msg to the command attribute
  commandToDetails(msg :any){
    this.command=msg;
    console.log("command recieved to dash : "+msg)
  }
}
