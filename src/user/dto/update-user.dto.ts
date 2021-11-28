import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  updated_at: Date;
  constructor() {
    super();
    this.updated_at = new Date();
  }
}
