export * from "./types.js";
export { TypingRecorder } from "./recorder.js";
export { DataCompressor } from "./compressor.js";
export { TypingReplayer } from "./replayer.js";
export { CodeGenerator } from "./generator.js";

import { TypingRecorder } from "./recorder.js";
import { DataCompressor } from "./compressor.js";
import { TypingReplayer } from "./replayer.js";
import { CodeGenerator } from "./generator.js";
import { TypingData, CompressedData } from "./types.js";

class HumanReplay {
  private recorder: TypingRecorder;
  private replayer: TypingReplayer;

  constructor(inputElement: HTMLInputElement | HTMLTextAreaElement) {
    this.recorder = new TypingRecorder(inputElement);
    this.replayer = new TypingReplayer();
  }

  startRecording(): void {
    this.recorder.startRecording();
  }

  stopRecording(): void {
    this.recorder.stopRecording();
  }

  hasRecordedData(): boolean {
    return this.recorder.hasData();
  }

  getRecordedData(): TypingData {
    return this.recorder.getRecordedData();
  }

  getCompressedData(): CompressedData {
    return DataCompressor.compress(this.recorder.getRecordedData());
  }

  replay(targetElement: HTMLElement, intervalMs: number = 20): number {
    const compressedData = this.getCompressedData();
    return this.replayer.replayText(targetElement, compressedData, intervalMs);
  }

  stopReplay(): void {
    this.replayer.stop();
  }

  isReplaying(): boolean {
    return this.replayer.isPlaying();
  }

  generateVanillaJSCode(): string {
    const compressedData = this.getCompressedData();
    return CodeGenerator.generateVanillaJS(compressedData);
  }

  reset(): void {
    this.recorder.reset();
    this.replayer.stop();
  }

  static replayFromData(
    element: HTMLElement,
    compressedData: CompressedData,
    intervalMs: number = 20,
  ): number {
    const replayer = new TypingReplayer();
    return replayer.replayText(element, compressedData, intervalMs);
  }

  static generateVanillaJSFromData(compressedData: CompressedData): string {
    return CodeGenerator.generateVanillaJS(compressedData);
  }
}

export default HumanReplay;

