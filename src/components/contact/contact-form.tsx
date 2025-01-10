"use client";

import { z } from "zod";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { MainButton } from "../ui/main-button";
import { useState, type ReactNode } from "react";
import { formatPhone } from "@/utils/formatPhone";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

export interface ContactSchema {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const createContact = z.object({
  name: z.string({ required_error: "Campo obrigatório" }),
  email: z.string({ required_error: "Campo obrigatório" }),
  phone: z.string({ required_error: "Campo obrigatório" }),
  message: z.string({ required_error: "Campo obrigatório" }),
});

export function ContactForm() {
  const [buttonLabel, setButtonLabel] = useState<ReactNode>("Enviar");

  const form = useForm<z.infer<typeof createContact>>({
    resolver: zodResolver(createContact),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof createContact>) => {
    try {
      setButtonLabel(<Spinner />);

      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          message: `Email:${values.message}`,
          Nome: values.name,
          Telefone: values.phone,
        }),
      });

      setButtonLabel("Enviado");
    } catch (error) {
      setButtonLabel("Erro");
    }
  };

  function handlePhoneInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    event.target.value = formatPhone(value);
  }

  return (
    <div className="flex flex-col gap-[18px] w-full max-w-[571px]">
      <Form {...form}>
        <div className="flex flex-col lg:flex-row gap-[25px] w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input {...field} placeholder="Nome" />
                </FormControl>
                <FormMessage>
                  {fieldState.error?.message && fieldState.error?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Celular"
                    onInput={handlePhoneInput}
                  />
                </FormControl>
                <FormMessage>
                  {fieldState.error?.message && fieldState.error?.message}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Email" />
              </FormControl>
              <FormMessage>
                {fieldState.error?.message && fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Mensagem"
                  className="min-h-[148px]"
                />
              </FormControl>
              <FormMessage>
                {fieldState.error?.message && fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className="flex space-x-2">
          <MainButton
            label={buttonLabel}
            onClick={form.handleSubmit(onSubmit)}
          />
          {buttonLabel === "Enviado" && (
            <button
              type="button"
              onClick={() => {
                form.reset();
                setButtonLabel("Enviar");
              }}
              className="text-sm"
            >
              enviar novamente
            </button>
          )}
        </div>
      </Form>
    </div>
  );
}
