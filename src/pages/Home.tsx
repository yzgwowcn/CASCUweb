import Hero from '../components/Hero';
import Culture from '../components/Culture';
import Activities from '../components/Activities';
import Recruitment from '../components/Recruitment';
import RegistrationForm from '../components/RegistrationForm';

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero />
      <Culture />
      <Activities />
      <Recruitment />
      <RegistrationForm />
    </main>
  );
}
