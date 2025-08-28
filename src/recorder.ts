import { TypingEvent, TypingData } from './types.js';

export class TypingRecorder {
  private values: TypingData = [];
  private start: Date | null = null;
  private element: HTMLInputElement | HTMLTextAreaElement;
  private boundHandler: (event: Event) => void;

  constructor(element: HTMLInputElement | HTMLTextAreaElement) {
    this.element = element;
    this.boundHandler = this.handleInput.bind(this);
  }

  startRecording(): void {
    this.values = [];
    this.start = null;
    this.element.addEventListener('input', this.boundHandler);
  }

  stopRecording(): void {
    this.element.removeEventListener('input', this.boundHandler);
  }

  private handleInput(): void {
    if (!this.start) {
      this.start = new Date();
    }

    this.values.push({
      value: this.element.value,
      time: new Date().getTime() - this.start.getTime()
    });
  }

  getRecordedData(): TypingData {
    return [...this.values];
  }

  reset(): void {
    this.values = [];
    this.start = null;
    this.element.value = '';
  }

  hasData(): boolean {
    return this.values.length > 0;
  }
}