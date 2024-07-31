import EmailForm from "@/components/contactar/emailform";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-10">
        <div className="inline-block w-full text-center justify-center">
          <h1 className={title()}>Medios de contacto</h1>
        </div>
        <EmailForm />
      </section>
    </DefaultLayout>
  );
}
