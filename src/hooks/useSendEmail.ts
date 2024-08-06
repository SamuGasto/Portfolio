import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useSendEmail() {
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
  return {
    email,
    isInvalidEmail,
    invalidEmail,
    mensaje,
    isInvalidMessage,
    invalidMensaje,
    EnviarEmail,
  };
}
