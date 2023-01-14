import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  providers: [ ConfigService ],
  styles: ['.error { color: #b30000; }']
})
export class ConfigComponent {
  error: any;
  headers: string[] = [];
  config: string | undefined;

  constructor(private configService: ConfigService) {}

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = [];
  }

  showConfig() {
    this.configService.getPlaintext().subscribe((data: string) => this.config = data);
  }


  makeError() {
    this.configService.makeIntentionalError().subscribe({ error: error => this.error = error.message });
  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}
