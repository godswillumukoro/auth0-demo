const express = require("express");
const router = express.Router();
const { requiresAuth } = require("express-openid-connect");

router.get("/", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.render("admin", {
      title: "Node.js",
      isAuthenticated: req.oidc.isAuthenticated(),
      user: req.oidc.user,
    });
  } else {
    res.render("index", {
      title: "Node.js",
      isAuthenticated: req.oidc.isAuthenticated(),
      user: req.oidc.user,
    });
  }
  console.log(req.oidc.isAuthenticated());
});

router.get("/app-admin", requiresAuth(), (req, res) => {
  res.render("admin", {
    title: "Admin Page",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
  console.log(req.oidc.isAuthenticated());
});

module.exports = router;
