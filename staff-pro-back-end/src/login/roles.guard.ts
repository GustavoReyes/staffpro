import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles.decorator';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
 export class RolesGuard implements CanActivate {
 
   constructor(private reflector: Reflector,
                  private employeeService: EmployeeService ) {}


  async canActivate( context: ExecutionContext ):  Promise<boolean>   {
      
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
      ]);
      if (!requiredRoles || requiredRoles.length === 0) {
      return true; // No se requiere rol específico
      }
     const request = context.switchToHttp().getRequest();
    const user = request.user;

    const employee = await this.employeeService.findByUserId(user.id_user);
    if (!employee) throw new ForbiddenException('No empleado asignado');

    // Determinar el "rol" a partir del department_id
    const role = employee.department_id === 1 ? 'admin' : 'user';

    if (!requiredRoles.includes(role)) {
      throw new ForbiddenException('No tienes permiso para acceder');
    }

    return true;
  }
  }

