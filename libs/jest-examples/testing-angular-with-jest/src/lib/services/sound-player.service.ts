import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundPlayerService {
  foo = '';

  constructor() {
    this.foo = 'bar';
  }

  playSoundFile(fileName: string) {
    console.log('Playing sound file ' + fileName);
  }
}
