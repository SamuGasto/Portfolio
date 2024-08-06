import EmailForm from "@/components/contactar/email-form";
import RedesSociales from "@/components/contactar/redes-sociales";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <motion.div
        className="flex flex-col items-center justify-center gap-12 py-8 md:py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center w-full text-center justify-center gap-6">
          <h1 className="font-semibold text-4xl">Enviar mensaje</h1>
          <EmailForm />
        </div>
        <div className="flex flex-col w-full text-center gap-8">
          <hr className="w-full border-0.1"></hr>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-4xl">Redes sociales</h1>
            <RedesSociales height={80} gap={10} />
          </div>
        </div>
      </motion.div>
    </DefaultLayout>
  );
}
