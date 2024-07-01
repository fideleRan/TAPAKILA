import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-fan.dto';

export class UpdateFanDto extends PartialType(CreateUserDto) {}
