class ApiErrors extends error{
constructor(statuscode,message ="Something went wrong",error =[],stack=""){
super(message)
this.statuscode = statuscode,
this.error = error ,
this.data = null,
this.message = message,
this.success = false
if(stack){
this.stack = stack
}else{
  Error.captureStactTree(this,this.constructor)
}
}
}
export default ApiErrors