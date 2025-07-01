import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'Tên đăng nhập không đưọc để trống' })
    userName: string;

    @IsNotEmpty({ message: 'Mật khẩu không đưọc để trống' })
    password: string;

    @IsNotEmpty({ message: 'Họ và tên không dc de trong', })
    fullName: string;

    @IsEmail({}, { message: 'Email không đúng định dạng' })
    @IsNotEmpty({ message: 'Email không được để trống', })
    email: string;

    @IsNotEmpty({ message: 'Số điện thoại không được để trống', })
    phoneNumber: string;
}

export class RegisterUserDto {
    @IsNotEmpty({ message: 'Tên đăng nhập không đưọc để trống' })
    userName: string;

    @IsNotEmpty({ message: 'Mật khẩu không đưọc để trống' })
    password: string;

    @IsNotEmpty({ message: 'Họ và tên không dc de trong', })
    fullName: string;

    @IsEmail({}, { message: 'Email không đúng định dạng' })
    @IsNotEmpty({ message: 'Email không được để trống', })
    email: string;

    @IsNotEmpty({ message: 'Số điện thoại không được để trống', })
    phoneNumber: string;

}

