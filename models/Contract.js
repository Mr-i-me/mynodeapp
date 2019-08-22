const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
  create: {
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
