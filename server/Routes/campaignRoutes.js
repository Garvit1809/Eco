const express = require("express");
const router = express.Router();
const {
    getAllCampaigns,
    getCampaignById,
    createCampaign,
    // deleteCampaign
} = require("../Controllers/campaign");

router.get("/", getAllCampaigns);
router.get("/:id", getCampaignById);
router.post("/create", createCampaign);
// router.delete("/delete", deleteCampaign);

module.exports = router;
