'use client';

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

export default function HomePage() {
  const { user } = useUser();
  const role = user?.publicMetadata.role;

  return (
    <>
      <SignedOut>
        <h1>Faça Login</h1>
        <SignInButton mode="modal">
          <button>Entrar</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button>Cadastrar</button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: { width: '250px', height: '250px' },
            },
          }}
        />
      </SignedIn>
    </>
  );
}