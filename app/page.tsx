import { redirect } from 'next/navigation';

export default function Portfolio() {
  redirect('/home');
  return null;
};