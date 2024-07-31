import emailjs from "@emailjs/browser";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [invalidMensaje, setInvalidMensaje] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  function isInvalidEmail(text: string): boolean {
    setEmail(text);
    if (text === "") {
      setInvalidEmail(true);
      return true;
    } else if (validateEmail(text)) {
      setInvalidEmail(false);
      return false;
    }
    setInvalidEmail(true);
    return true;
  }

  function isInvalidMessage(text: string): boolean {
    setMensaje(text);
    if (text === "") {
      setInvalidMensaje(true);
      return true;
    }
    setInvalidMensaje(false);
    return false;
  }

  function EnviarEmail() {
    //Verificar que no existan valores incorrectos
    if (isInvalidMessage(mensaje)) {
      if (isInvalidEmail(email)) return;
      return;
    }

    //Generar el template
    const templateParams = {
      to_name: "Samuel",
      from_name: email,
      message: mensaje,
    };

    //Resetear valores del formulario
    setEmail("");
    setMensaje("");

    //Envia el correo con emailjs
    emailjs
      .send("service_h4z60tj", "template_lflowm9", templateParams, {
        publicKey: "01swEbXy456lNP-Qt",
      })
      .then(
        () => {
          toast.success("Se ha enviado correctamente el mensaje", {
            position: "bottom-right",
            duration: 4000,
          });
        },
        () => {
          toast.error(
            "Hubo un error al enviar el mensaje, intentalo nuevamente",
            {
              position: "bottom-right",
              duration: 4000,
            }
          );
        }
      );
  }

  return (
    <div className="flex flex-col justify-center items-center w-2/6 gap-6">
      <Input
        isRequired
        type="email"
        label="Email"
        variant="underlined"
        isInvalid={invalidEmail}
        value={email}
        errorMessage="Se ha ingresado un correo inválido"
        onValueChange={(text: string) => isInvalidEmail(text)}
      />
      <Input
        isRequired
        type="text"
        label="Mensaje"
        variant="underlined"
        isInvalid={invalidMensaje}
        value={mensaje}
        errorMessage="Este campo no puede enviarse en blanco."
        onValueChange={(text: string) => isInvalidMessage(text)}
      />
      <Button
        className="light light:bg-green-500 dark:bg-white shadow-md dark:shadow-sm dark:shadow-green-50 mt-7"
        size="lg"
        onPress={() => EnviarEmail()}
      >
        <h1 className="light font-PlaywriteDKUloopet light:text-white dark:text-black">
          Enviar
        </h1>
      </Button>
      <Toaster />
    </div>
  );
}
