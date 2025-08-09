class ApiResponse{
  constructor(statuscode,data,message,success = true){
    this.statuscode = statuscode<400,
    this.success = success,
    this.message = message,
    this.data = data

  }
}
export default ApiResponse