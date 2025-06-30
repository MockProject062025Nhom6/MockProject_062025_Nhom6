import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(6).max(50),
})

const LoginForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-[#666]">
                Username
              </FormLabel>
              <FormControl>
                <Input className="border border-[#ccc]" {...field} />
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
              <div className="flex justify-between items-center text-[#666]">
                <FormLabel className="  font-normal">Password</FormLabel>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {!isShowPassword ? (
                    <>
                      <Eye size={16} /> <span>Show</span>
                    </>
                  ) : (
                    <>
                      <EyeOff size={16} /> <span>Hide</span>
                    </>
                  )}
                </div>
              </div>
              <FormControl>
                <Input
                  type={isShowPassword ? "text" : "password"}
                  className="border border-[#ccc]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button type="submit" className="px-12">
            Login
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
