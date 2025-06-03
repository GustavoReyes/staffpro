export class LeaveRequestDto {
  id?: number;
  id_user_fk: number;
  type?: string;
  start_date?: Date;
  end_date?: string;
  status?: string;
}