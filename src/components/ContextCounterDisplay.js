'use client';

import { useCounter } from '@/components/CounterContext';

export default function ContextCounterDisplay() {
  const { count } = useCounter();
  return <p>Wartość z kontekstu: {count}</p>;
}