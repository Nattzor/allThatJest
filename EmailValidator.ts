const emailValidator = (email: string) => {
    if(!email.includes("@")){
        throw "Must contain @"
    }
     domains.some(element => {
        if (email.endsWith(element)) {
          return true;
        }
      
        throw "Must contain a domain"
      });
  
    }
    
const domains = ['.com', '.se', '.org','.net','.edu','.gov','.init'];



export default emailValidator