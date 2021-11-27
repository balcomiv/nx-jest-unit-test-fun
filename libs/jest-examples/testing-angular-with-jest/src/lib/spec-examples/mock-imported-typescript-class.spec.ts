// https://dev.to/codedivoire/how-to-mock-an-imported-typescript-class-with-jest-2g7j

// https://dev.to/bmitchinson/mocking-classes-in-jest-typescript-2pc

import { mocked } from 'ts-jest/utils';
import { SoundPlayerService } from '../services/sound-player.service';

jest.mock('../services/sound-player.service');

describe('SoundPlayerService', () => {
  const mockedSoundPlayerService = mocked(SoundPlayerService, true);

  beforeEach(() => {
    // Clears the record of calls to the mock constructor function and its methods
    mockedSoundPlayerService.mockClear();
  });

  it('should behave...', () => {
    expect(mockedSoundPlayerService.mock).toBeTruthy();
  });
});
