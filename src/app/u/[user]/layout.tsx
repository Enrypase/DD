import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Layout(props: { children: React.JSX.Element }) {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") return router.push("/");
  return <div className='auth'>{props.children}</div>;
}
