import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RoleValidationPipe } from './pipes/role-validation.pipe';

@Module({
  controllers: [UserController],
  providers: [UserService, RoleValidationPipe],
  exports: [UserService],
})
export class UserModule {}
