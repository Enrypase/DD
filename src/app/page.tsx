import { GoogleSignIn } from "./components/UI/Buttons";

export default function Home() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <GoogleSignIn />
    </div>
  );
}
