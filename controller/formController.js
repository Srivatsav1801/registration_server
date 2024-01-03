const express = require("express");

const firstGetRequest = (req, res) => {
  res.status(200).json({ error: false, message: "My first Get Request" });
};
const firstPostRequest = (req, res) => {
  res.status(200).json({ error: false, message: req.body });
};
const firstPutRequest = (req, res) => {
  res.status(200).json({ error: false, message: req.body });
};

module.exports = { firstGetRequest, firstPostRequest, firstPutRequest };
