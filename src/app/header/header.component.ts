import { Component, OnInit } from '@angular/core';
import { MessageService } from './../service/message.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
    constructor(private messageService: MessageService) { }
    
    ngOnInit(): void {}

    onButtonClick(inputMessage: string) {
        console.log(inputMessage);
        this.messageService.sendMessage(inputMessage);
    }
  
}