import {IsBoolean, IsString} from 'class-validator'

export class CreateUserDto {
    @IsString()
    document: String;
    @IsString()
    name: String;
    @IsString()
    lastName: String;
    @IsString()
    password: String;
    @IsString()
    phone: String;
    @IsString() 
    email: String;
    @IsBoolean()
    isActive: Boolean; 
}
