import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';
import { getServerSession } from 'next-auth';
import LoginButton from './LoginButton';
import Profile from './Profile';

export default async function Auth() {
  const session = await getServerSession(authConfig);

  if (!session) return <LoginButton />;

  return <Profile session={session} />;
}
