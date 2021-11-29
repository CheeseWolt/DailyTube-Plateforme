import { OmitType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class GetUserDto extends OmitType(User, ['email', 'password']) {}
