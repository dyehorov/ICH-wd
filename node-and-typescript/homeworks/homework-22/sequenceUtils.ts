export function generateFibonacci(limit: number): number[] {
  if (limit < 0) {
    return [];
  }

  const sequence: number[] = [0];

  if (limit === 0) {
    return sequence;
  }

  sequence.push(1);

  while (true) {
    const nextValue =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];

    if (nextValue > limit) {
      break;
    }

    sequence.push(nextValue);
  }

  return sequence;
}

export function generatePrimeNumbers(limit: number): number[] {
  const primeNumbers: number[] = [];

  for (let candidate = 2; candidate <= limit; candidate += 1) {
    let isPrime = true;

    for (let divisor = 2; divisor * divisor <= candidate; divisor += 1) {
      if (candidate % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers.push(candidate);
    }
  }

  return primeNumbers;
}
