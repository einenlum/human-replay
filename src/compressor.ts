import { TypingData, CompressedData, CompressedOperation } from './types.js';

export class DataCompressor {
  static compress(values: TypingData): CompressedData {
    const toCompressedItem = (lastValue: string, item: { value: string; time: number }): CompressedOperation | null => {
      if (lastValue.length === item.value.length) {
        return null;
      }

      if (lastValue === item.value.slice(0, -1)) {
        return { op: 'a', v: item.value.slice(-1), t: item.time };
      }

      if (lastValue.length - 1 === item.value.length && lastValue.slice(0, -1) === item.value) {
        return { op: 'd', t: item.time };
      }

      return { op: 'r', v: item.value, t: item.time };
    };

    const compressed: CompressedData = [];
    let lastValue = '';

    for (let i = 0; i < values.length; i++) {
      const item = values[i];
      const compressedItem = toCompressedItem(lastValue, item);

      if (compressedItem) {
        compressed.push(compressedItem);
        lastValue = item.value;
      }
    }

    return compressed;
  }
}