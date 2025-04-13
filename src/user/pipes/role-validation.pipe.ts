import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class RoleValidationPipe implements PipeTransform {
  transform(value: string) {
    const validRoles = ['admin', 'user'];
    if (!validRoles.includes(value)) {
      throw new BadRequestException(`${value} is not a valid role.`);
    }
    return value;
  }
}
