import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class SharedUiModule {}
