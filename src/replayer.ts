import { CompressedData } from './types.js';

export class TypingReplayer {
  private interval: number | null = null;

  replayText(element: HTMLElement, values: CompressedData, intervalMs: number = 20): number {
    element.textContent = '';
    const printingStart = new Date();
    const valuesCopy = [...values];

    this.stop();

    this.interval = setInterval(() => {
      const timePassed = new Date().getTime() - printingStart.getTime();
      const value = valuesCopy.shift();

      if (!value) {
        this.stop();
        return;
      }

      if (value.t > timePassed) {
        valuesCopy.unshift(value);
        return;
      }

      switch (value.op) {
        case 'a':
          element.textContent = (element.textContent || '') + (value.v || '');
          break;
        case 'd':
          element.textContent = (element.textContent || '').slice(0, -1);
          break;
        default:
          element.textContent = value.v || '';
      }
    }, intervalMs);

    return this.interval;
  }

  stop(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  isPlaying(): boolean {
    return this.interval !== null;
  }
}