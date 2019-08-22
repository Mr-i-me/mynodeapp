const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CheckoutSchema = new Schema({
  aprovado: {
    type: Boolean,
    default: false
  }
});

let UploadSchema = new Schema({
  documento: {
    type: String,
    required: [true, 'Document is required'],
    default: "" 
  },
  comprovanteRenda: {
    type: String,
    default: ""
  },
  imovelPhotos: {
    type: String,
    default: ""
  }
});

let UserSchema = new Schema({
  nome: {
    type: String,
    required: [true, 'Name field is required'],
    default: ""
  },
  email: {
    type: String,
    required: [true, 'Email field is required'],
    default: ""
  },
  cpf: {
    type: String,
    required: [true, 'CPF field is required'],
    default: "",
    unique: true
  },
  valorEmprestimo: {
    type: Number,
    required: [true, 'Valor do Emprestimo field is required'],
    default: 0
  },
  rendaMensal: {
    type: Number,
    default: 0
  },
  dataNascimento: {
    type: Date,
    default: Date.now
  },
  estadoCivil: {
    type: ['solteiro(a)', 'casado(a)', 'divorciado(a)'],
    default: undefined
  },
  endereco: {
    type: String,
    default: ""
  },
  photos: UploadSchema,
  approved: CheckoutSchema
});


const User = mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
