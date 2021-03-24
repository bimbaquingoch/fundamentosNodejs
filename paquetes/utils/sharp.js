const sharp = require("sharp");

sharp("./zoro.jpg").resize(80).toFile("resized.png");
