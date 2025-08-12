"use client";

import * as React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
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
import toast from "react-hot-toast";

const FormSchema = z.object({
  company: z.string().min(1, "Company name is required."),
  gmail: z.string().email("Please enter a valid email address."),
  username: z.string().min(2, "Username must be at least 2 characters."),
});

export default function TermsThenFormInDialog() {
  const [formOpen, setFormOpen] = React.useState(false);
  const [termsOpen, setTermsOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { username: "", gmail: "", company: "" },
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
    // await fetch('/api/submit', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(values) })
    console.log("Submitted:", values);

    toast.success("Form submitted successfully!");
    reset();
    setFormOpen(false);
  };

  return (
    <div className="mx-auto max-w-xl space-y-6 p-6">
      {/* Trigger */}
      <Button
        className="hidden cursor-pointer sm:inline-flex items-center rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-500"
        onClick={() => setTermsOpen(true)}
      >
        Book a Demo
      </Button>

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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book a Demo Form</DialogTitle>
            <DialogDescription>Fill the fields and submit.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="e.g. khalid2247"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-xs text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="gmail">Gmail</Label>
              <Input
                id="gmail"
                type="email"
                placeholder="your@gmail.com"
                {...register("gmail")}
              />
              {errors.gmail && (
                <p className="text-xs text-red-600">{errors.gmail.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company">Company name</Label>
              <Input
                id="company"
                placeholder="Your company name"
                {...register("company")}
              />
              {errors.company && (
                <p className="text-xs text-red-600">{errors.company.message}</p>
              )}
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className="cursor-pointer"
                  type="button"
                  variant="outline"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                className="cursor-pointer"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting…" : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
