const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/testdb',{ useNewUrlParser: true });
