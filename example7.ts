// & is intersection sign 
interface hospital{
    doctors:number,
    patient :number,

}
interface gynhospital{
    ladydoctor:number,
    patients:number,
}
type intersection_type = hospital & gynhospital
let total :intersection_type ={
    doctors:22,
    patient:3333,
    ladydoctor:12,
    patients:75546,

}
console.log(total.ladydoctor);