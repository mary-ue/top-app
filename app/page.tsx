import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Исправленные данные',
//   description: 'Исправленный текст',
// };

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: 'ComputedMeta',
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      Main page
    </main>
  );
}
