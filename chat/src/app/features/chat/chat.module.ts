import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPageComponent } from './chat-page.component';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }