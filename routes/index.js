const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Node.js",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user
  });
  console.log(req.oidc.isAuthenticated());
});

module.exports = router;
