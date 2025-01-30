import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="buttons-container">
          <button className="button">Iniciar sesión</button>
          <button className="button">Registrarse</button>
        </div>
      </div>
    </div>
  );
}
