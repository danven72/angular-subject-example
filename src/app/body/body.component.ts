import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './../service/message.service';

@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {    
    
    private subscription!: Subscription;
    text: string = '';

    constructor(private messageService: MessageService) {
    }
    
    ngOnInit(): void {
        this.subscription = this.messageService.receiveMessage().subscribe((t) =>{
            this.text = t;
        } ) ;   
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
}