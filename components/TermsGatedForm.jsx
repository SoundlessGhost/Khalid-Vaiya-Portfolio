"use client";

import * as React from "react";
import toast from "react-hot-toast";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  company: z.string().min(1, "Company is required."),
  lastName: z.string().min(1, "Last name is required."),
  message: z.string().min(5, "Please add a few details."),
  firstName: z.string().min(1, "First name is required."),
  workEmail: z.string().email("Please enter a valid work email."),
});

export default function TermsThenFormInDialog({ beforeOpen, buttonClassName }) {
  const [formOpen, setFormOpen] = React.useState(false);
  const [termsOpen, setTermsOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      company: "",
      message: "",
    },
  });

  const onDecline = () => {
    setTermsOpen(false);
    setFormOpen(false);
  };

  const onAccept = () => {
    setTermsOpen(false);
    setFormOpen(true);
  };

  const onSubmit = async (values) => {
    try {
      const payload = {
        name: `${values.firstName} ${values.lastName}`.trim(),
        company: values.company,
        email: values.workEmail,
        message: values.message,
      };

      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) return toast.error(data.error || "Failed to submit form");

      toast.success("Form submitted successfully!");
      reset();
      setFormOpen(false);
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-6 p-6">
      {/* Trigger */}
      <button
        className={
          buttonClassName ??
          "hidden cursor-pointer sm:inline-flex items-center rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-500"
        }
        onClick={() => {
          beforeOpen?.();
          setTermsOpen(true);
        }}
      >
        Book a Demo
      </button>

      {/* TERMS DIALOG */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Terms & Conditions</DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground max-h-60 overflow-auto">
                <p>
                  By clicking <b>Accept All</b>, you agree to our Terms, Privacy
                  Policy, and consent to processing of your data for this form.
                </p>
                <p>
                  You may withdraw consent at any time. Decline will simply
                  close this section, and no data will be collected.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-2 sm:space-x-2">
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={onDecline}
            >
              Decline
            </Button>
            <Button className="cursor-pointer" onClick={onAccept}>
              Accept All
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* FORM DIALOG */}
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left column – benefits */}
            <div className="space-y-6 p-6 md:p-8">
              <DialogHeader className="text-left">
                <DialogTitle className="text-2xl">Book a Demo</DialogTitle>
                <DialogDescription>
                  View a recorded demo right away and schedule a live session
                  with our team.
                </DialogDescription>
              </DialogHeader>

              <ul className="space-y-4 text-sm">
                {[
                  "Discover thousands of ready-to-use Actors on the store",
                  "Learn how to build or migrate your existing scrapers",
                  "Ask how scraping & automation can help your business",
                  "Explore our API & connect your workflow to other tools",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column – form */}
            <div className="border-t md:border-t-0 md:border-l">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 md:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" {...register("firstName")} />
                    {errors.firstName && (
                      <p className="text-xs text-red-600">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" {...register("lastName")} />
                    {errors.lastName && (
                      <p className="text-xs text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="workEmail">Work email</Label>
                  <Input
                    id="workEmail"
                    type="email"
                    {...register("workEmail")}
                  />
                  {errors.workEmail && (
                    <p className="text-xs text-red-600">
                      {errors.workEmail.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" {...register("company")} />
                  {errors.company && (
                    <p className="text-xs text-red-600">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    placeholder="Be as descriptive as you can. The more we know, the better we can help."
                    rows={5}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full cursor-pointer"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting…" : "Book a Demo"}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    We’ll use your information to contact you about our products
                    and services. For more information, see our{" "}
                    <a
                      href="/legal/privacy-policy"
                      className="underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="cursor-pointer"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
