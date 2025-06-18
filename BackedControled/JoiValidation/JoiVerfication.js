
const JoiVerification = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      
        
      const errors = {};
      error.details.forEach((detail) => {
        errors[detail.path[0]] = detail.mesnpmsage;
       
      });
      /*DataBseInfo */

      return res.status(400).json({ UserValidation: errors,dataValor: false });
    }
   res.status(200).json({ dataValor: true });
    next();
  };
};

export default JoiVerification;
