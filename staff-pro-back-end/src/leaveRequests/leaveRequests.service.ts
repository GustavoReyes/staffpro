import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveRequest } from './leaveRequest.model';
import { LeaveRequestDto } from './dto/leaveRequestDto';

@Injectable()
export class LeaveRequestsService {
  constructor(
    @InjectRepository(LeaveRequest) private leaveRequestRepository: Repository<LeaveRequest>){}

  async findAll(): Promise<LeaveRequest[]> {
    return this.leaveRequestRepository.find({ relations: ['user','employee'] });
  }

  async findOne(id: number): Promise<LeaveRequest | null> {
    return this.leaveRequestRepository.findOne({
      where: { id },
      relations: ['user','employee'],
    });
  }

async create(dto: LeaveRequestDto): Promise<{success: boolean; message: string; data?: LeaveRequestDto}> {
  try {
    const leaveRequest = this.leaveRequestRepository.create({
      type: dto.type,
      start_date: dto.start_date ? new Date(dto.start_date) : undefined,
      end_date: dto.end_date ? new Date(dto.end_date) : undefined,
      status: dto.status,
      user: { id_user: dto.id_user_fk } as any
    });
    const requestSaved = await this.leaveRequestRepository.save(leaveRequest);
    return {
      success: true,
      message: 'Solicitud creada correctamente.',
      data: {
        id: requestSaved.id,
        id_user_fk: dto.id_user_fk,
        type: requestSaved.type,
        start_date: requestSaved.start_date,
        end_date: requestSaved.end_date,
        status: requestSaved.status
      }
    };
  } catch (error) {
     console.error('Error creando la solicitud de permiso:', error)
    return {
      success: false,
      message: 'No se creó la solicitud. (create_error)'
    };
  }
}

async update(id: number, dto: Partial<LeaveRequestDto>): Promise<LeaveRequest> {
  const leaveRequest = await this.leaveRequestRepository.findOne({
     where: { id },
      relations: ['user'] 
    });
  if (!leaveRequest) throw new Error('No se encontró la solicitud. (update_error)');
  if (dto.type !== undefined) leaveRequest.type = dto.type;
  if (dto.start_date !== undefined) leaveRequest.start_date = dto.start_date;
  if (dto.end_date !== undefined) leaveRequest.end_date = dto.end_date;
  if (dto.status !== undefined) leaveRequest.status = dto.status;
  if (dto.id_user_fk !== undefined) leaveRequest.user = { id_user: dto.id_user_fk } as any;

  return this.leaveRequestRepository.save(leaveRequest);
}

  async remove(id: number): Promise<{success:boolean,message:string}> {
    const result = await this.leaveRequestRepository.delete(id);
    if (result.affected > 0) {
      return { success: true, message: 'Solicitud eliminada correctamente.' };
    } else {
      return { success: false, message: 'No se eliminó la solicitud. (remove_error)' };
    }
  }
}