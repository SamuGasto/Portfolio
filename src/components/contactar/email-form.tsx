import useSendEmail from "@/hooks/useSendEmail";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function EmailForm() {
  const {
    email,
    isInvalidEmail,
    invalidEmail,
    mensaje,
    isInvalidMessage,
    invalidMensaje,
    EnviarEmail,
  } = useSendEmail();

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
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          className="light light:bg-green-500 dark:bg-white shadow-md dark:shadow-sm dark:shadow-green-50 mt-7"
          size="lg"
          onPress={() => EnviarEmail()}
        >
          <h1 className="light font-PlaywriteDKUloopet light:text-white dark:text-black">
            Enviar
          </h1>
        </Button>
      </motion.div>

      <Toaster />
    </div>
  );
}
