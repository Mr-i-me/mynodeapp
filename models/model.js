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
    required: [true, 'Document is required']
    default: "" // Set default to == nil
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
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema

});


mongoose.model('Contract', ContractSchema);
module.exports = mongoose.model('Contract');
