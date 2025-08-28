export interface TypingEvent {
  value: string;
  time: number;
}

export interface CompressedOperation {
  op: 'a' | 'd' | 'r';
  v?: string;
  t: number;
}

export type TypingData = TypingEvent[];
export type CompressedData = CompressedOperation[];