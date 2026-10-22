import Link from 'next/link';
import Counter from '@/components/Counter';
import GreetingForm from '@/components/GreetingForm';
import ContextCounterDisplay from '@/components/ContextCounterDisplay';
import ContextCounterButton from '@/components/ContextCounterButton';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
      <Counter />
      <GreetingForm />
      <ContextCounterDisplay />
      <ContextCounterButton />
    </main>
  );
}
