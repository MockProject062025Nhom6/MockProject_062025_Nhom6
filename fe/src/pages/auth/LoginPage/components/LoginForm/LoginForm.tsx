import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"

const loginSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(50),
  isRemembered: z.boolean().optional(),
})

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      isRemembered: false,
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-4xl font-bold text-primary">Login</h2>
          <p className="text-muted-foreground">Login to your account.</p>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary">E-mail Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary">Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="isRemembered"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked)
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm text-muted-foreground">
                    Remember me
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Link to={"/reset-password"} className="font-bold text-primary">
              Reset Password?
            </Link>
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>

          <div className="text-sm text-muted-foreground text-center">
            Don&apos;t have an account yet?{" "}
            <Link to="/register" className="text-primary font-bold">
              Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
