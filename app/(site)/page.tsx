import styles from './page.module.css';
import { Metadata } from 'next';
import { Menu } from './components/menu';

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

export default async function Home() {
  return (
    <main className={styles.main}>
      Главная страница
      <Menu />
    </main>
  );
}
