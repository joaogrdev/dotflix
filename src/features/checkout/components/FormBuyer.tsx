import { useFormContext } from "react-hook-form";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { toastError } from "@/lib/toasts";
import { applyMask } from "@/lib/utils";
import { fetchCep } from "../hooks/useCep";
import type { CheckoutFormData } from "@/pages/Checkout";

const FormBuyer = () => {
  const [loading, setLoading] = useState(false);
  const form = useFormContext<CheckoutFormData>();

  async function handleCep(cep: string) {
    const cleanCep = cep.replace(/\D/g, "");

    try {
      setLoading(true);
      const data = await fetchCep(cleanCep);
      form.setValue("endereco", `${data.logradouro}, ${data.bairro}`);
      form.setValue("cidade", data.localidade);
      form.setValue("estado", data.uf);
    } catch (error: any) {
      console.error(error);
      toastError(
        "ERRO",
        "Falha ao buscar endereço, verifique o CEP e tente novamente"
      );
    } finally {
      setLoading(false);
    }
  }

  const handleChangeMasked = (e: any) => {
    const { name, value } = e.target;
    if (name === "numero" && isNaN(value)) return;

    const masked = applyMask(value, name);
    form.setValue(name as keyof CheckoutFormData, masked);

    if (name === "cep") {
      if (masked.length === 9) handleCep(masked);
      else resetAddressFields();
    }
  };

  const resetAddressFields = () => {
    ["endereco", "numero", "complemento", "cidade", "estado"].forEach((field) =>
      form.resetField(field as keyof CheckoutFormData)
    );
  };

  const renderField = (
    name: keyof CheckoutFormData,
    label: string,
    required?: boolean,
    props?: React.InputHTMLAttributes<HTMLInputElement>
  ) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className="text-contrast">*</span>}
          </FormLabel>
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <Form {...form}>
      <form className="space-y-3 relative">
        <p className="absolute top-0 right-0 text-xs text-muted-foreground">
          <span className="text-contrast">*</span> Campos obrigatórios
        </p>
        {renderField("nome", "Nome Completo", true)}
        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-3">
          {renderField("cpf", "CPF", true, { onChange: handleChangeMasked })}
          {renderField("celular", "Celular", true, {
            onChange: handleChangeMasked,
          })}
        </div>
        {renderField("email", "E-mail")}

        <div className="grid grid-cols-1 mobile:grid-cols-[120px_1fr] gap-3">
          <FormField
            control={form.control}
            name="cep"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  CEP <span className="text-contrast">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input {...field} onChange={handleChangeMasked} />
                    {loading && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <Spinner />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {renderField("endereco", "Endereço", true, { disabled: true })}
        </div>

        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-3">
          {renderField("numero", "Número", true, {
            onChange: handleChangeMasked,
          })}
          {renderField("complemento", "Complemento")}
        </div>

        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-3">
          {renderField("cidade", "Cidade", true, { disabled: true })}
          {renderField("estado", "Estado", true, { disabled: true })}
        </div>
      </form>
    </Form>
  );
};

export default FormBuyer;
