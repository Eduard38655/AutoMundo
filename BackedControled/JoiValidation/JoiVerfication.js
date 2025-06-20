// middlewares/JoiVerification.js
const JoiVerification = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      // Construimos un objeto { campo: mensaje }
      const errors = error.details.reduce((acc, detail) => {
        acc[detail.path[0]] = detail.message;   // 🔑 aquí se corrige el typo
        return acc;
      }, {});

      console.log("Error de validación:", errors);
      return res.status(400).json({
        UserValidation: errors,
        dataValor: false
      });
    }
res.status(200).json({ dataValor: true });
    // Si no hay error, sigo al controller
    next();
  };
};

export default JoiVerification;

 