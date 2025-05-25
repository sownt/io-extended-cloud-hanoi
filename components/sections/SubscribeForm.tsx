"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { firestore } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { TimeWindow } from "../Time";
import Countdown from "../Clock";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Vui lòng nhập email.")
    .email("Email không hợp lệ.")
    .max(255, "Email không hợp lệ."),
});

export default function SubscribeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (firestore === null) return;
    const result = await addDoc(collection(firestore, "subscribers"), {
      email: values.email,
      timestamp: new Date().toISOString(),
    });

    if (result.id) {
      toast("Đăng ký thành công.");
      form.reset();
    } else {
      toast(
        `Không thể đăng ký, vui lòng liên hệ BTC <a href="https://www.facebook.com/GDGCloudHanoi">tại đây</a>.`
      );
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full px-4 py-24 mb-16 border-y-1">
      {/* <div className="flex flex-col items-center justify-center">
        <TimeWindow
          startTime="2025-04-01T00:00:00"
          endTime="2025-09-05T08:29:59"
          timezone="Asia/Ho_Chi_Minh"
        >
          <div className="flex flex-col">
            <p className="font-semibold text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
              Sự kiện sẽ bắt đầu sau
            </p>
            <Countdown
              targetDate="2025-04-05T08:29:59"
              timezone="Asia/Ho_Chi_Minh"
            />
          </div>
        </TimeWindow>

        <TimeWindow
          startTime="2025-04-05T08:30:00"
          endTime="2025-01-05T11:59:59"
          timezone="Asia/Ho_Chi_Minh"
        >
          <div className="flex flex-col">
            <p className="font-semibold text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
              Sự kiện sẽ kết thúc sau
            </p>
            <Countdown
              targetDate="2025-04-05T11:59:59"
              timezone="Asia/Ho_Chi_Minh"
            />
          </div>
        </TimeWindow>
      </div> */}
      <div className="text-center space-y-4 mx-auto max-w-2xl">
        <h3 className="mx-auto mt-4 max-w-xs text-2xl font-semibold sm:max-w-none sm:text-2xl md:text-3xl">
          Đăng ký nhận thông tin về sự kiện
        </h3>
      </div>
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Đăng ký nhận thông tin về sự kiện"
                      {...field}
                      className="w-full md:w-96"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={cn(
                buttonVariants({ variant: "default" }),
                "text-background flex gap-2"
              )}
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "..." : "Đăng ký"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
