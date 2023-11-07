import Image from "next/image";
import AuthForm from "@/app/(auth)/auth/_components/auth-form";

const AuthPage = () => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center space-y-12">
      <Image
        src="/sovkombank-logo-full-fit.svg"
        alt="sovkombank-logo"
        className="absolute top-4 md:left-8"
        width={200}
        height={50}
        draggable={false}
      />
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Авторизация</h1>
        <p className="text-sm text-muted-foreground">
          Войдите в аккаунт для доступа к приложению
        </p>
      </div>
      <div className="w-full max-w-sm space-y-4 pb-28">
        <AuthForm />
        <p className="text-center text-xs text-muted-foreground">
          Продолжая пользоваться сервисом, вы принимаете условия использования
          сервисов Совкомбанк
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
