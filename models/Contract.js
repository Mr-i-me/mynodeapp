var mongoose = require('mongoose');
var ContractSchema = new mongoose.Schema({
  stage_1: {
    name: [ String, required: true]
    email: String,
    cpf: String,
    valor: Number,
    renda: String,
    nascimento: String,
    EstadoCivil: String,
    Endereco: String
  },
  stage_2:{
    cnhCpf: String,
    comprovanteRenda: String,
    imóvel: String

  },
  stage_3:{
    status: String,
    enum: ['pending', 'aproved', 'rejected']
  }
});
mongoose.model('Contract', ContractSchema);
module.exports = mongoose.model('Contract');
