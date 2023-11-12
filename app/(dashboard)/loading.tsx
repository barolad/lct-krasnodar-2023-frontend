import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image
        src="/sovkombank-logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;
