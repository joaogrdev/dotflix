import FormBuyer from "@/features/checkout/components/FormBuyer";
import OrderInfo from "@/features/checkout/components/OrderInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  nome: z.string().min(1, " "),
  cpf: z
    .string()
    .min(1, " ")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  celular: z
    .string()
    .min(1, " ")
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Telefone inválido"),
  email: z
    .string()
    .min(1, " ")
    .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Email inválido"),
  cep: z
    .string()
    .min(1, " ")
    .regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  endereco: z.string().min(1, " "),
  numero: z.string().min(1, " "),
  complemento: z.string().optional(),
  cidade: z.string().min(1, " "),
  estado: z.string().min(1, " "),
});

export type CheckoutFormData = z.infer<typeof formSchema>;

const Checkout = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      cpf: "",
      celular: "",
      email: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      cidade: "",
      estado: "",
    },
  });

  function onSubmit() {}

  return (
    <FormProvider {...form}>
      <section className="py-8 tablet:py-6 flex flex-col sticky top-0 left-0 w-full h-full gap-5 tablet:gap-7 px-5 mobile:px-10 tablet:px-20 laptop:px-30 desktop:px-40">
        <h1 className="text-2xl tablet:text-4xl font-bold font-title">Finalizar Compra</h1>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 tablet:gap-15 laptop:gap-20 desktop:gap-25">
          <FormBuyer />
          <OrderInfo onSubmit={onSubmit} />
        </div>
      </section>
    </FormProvider>
  );
};

export default Checkout;
