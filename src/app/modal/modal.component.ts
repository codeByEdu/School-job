import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  error: any;
  headers: string[] = [];
  config: string | undefined;
  modal: boolean = false;
  constructor(private configService: ConfigService) {}

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = [];
  }

  showConfig() {
    this.configService.getPlaintext().subscribe((data: string) => this.config = data);
  }

  mostraModal(){
    if(!this.modal){
      this.modal = true;
      this.showConfig();
    }
    else{
      this.modal= false;
    }
  }
  makeError() {
    this.configService.makeIntentionalError().subscribe({ error: error => this.error = error.message });
  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}
