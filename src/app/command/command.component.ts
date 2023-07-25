import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  // the command_Name attribute used to bind the Name of the command by the parent componenent
  @Input() command_Name!: String;
  // the commandSent attribute used to send an event when comandComponent clicked
  @Output() commandSent = new EventEmitter();

  // the event binding method called by the parent
  sendCommandToList(){
    this.commandSent.emit(this.command_Name)
    console.log("click")
  }
}
