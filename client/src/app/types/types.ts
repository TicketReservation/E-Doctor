export interface Speciality{
    id:number
    name:string
}
export interface Doctor{
    id:number
}
export interface User{
    
        id: number,
        FirstName: string,
        LastName: string,
        Username: string,
        Email: string,
        Password: string,
        UserType: string,
        PhoneNumber: string,
        imageUrl: string,
        doctorId?: string,
        specialityId: number,
        speciality: Speciality,
        doctor:Doctor
      }
export interface AppointmentStatus {
    Pending:any,
    Confirmed:any,
    Cancelled:any
}
