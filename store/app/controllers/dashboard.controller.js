const fs = require('fs');
const csvParser = require('csv-parser')
const path = require('path');

exports.getReport1 = async (req, res) => {
  let results = [];
  res.status(200).json({ message: 'Exitoso', results });
};
