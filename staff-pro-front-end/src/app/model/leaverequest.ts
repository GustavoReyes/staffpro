export class LeaveRequest {
  id_user_fk: number;
  id?: number;
  type?: string;
  start_date?: string;
  end_date?: string;
  status?: 'pending' | 'approved' | 'rejected';

 constructor(
    id_user_fk: number,
    id?: number,
    type?: string,
    start_date?: string,
    end_date?: string,
    status: 'pending' | 'approved' | 'rejected' = 'pending'
  ) {
    this.id_user_fk=id_user_fk,
    this.id=id,
    this.type=type,
    this.start_date=start_date
    this.end_date=end_date
    this.status=status
  }
}
