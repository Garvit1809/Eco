const asyncHandler = require("express-async-handler");
const Campaign = require("../Models/campaignModel");

const getAllCampaigns = asyncHandler(async (req, res) => {
  try {
    const campaigns = Campaign.find();
    res.status(200).send(campaigns);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const getCampaignById = asyncHandler(async (req, res) => {
  try {
    const campaign = Campaign.find({ _id: req.chatId });
    res.status(200).send(campaign);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const createCampaign = asyncHandler(async (req, res) => {
  const currUser = req.user;
  try {
    // Create campaign chat
    const chat = await Chat.create({
      chatName: req.body.name,
      users: [currUser],
      isGroupChat: true,
      groupAdmin: currUser,
    });
    // Create campaign
    const campaign = await Campaign.create({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      location: req.body.location,
      chat: chat,
    });
    // Return newly created Campaign
    const newCampaign = await Chat.findOne({ _id: campaign._id });
    res.status(200).json(newCampaign);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  //   deleteCampaign,
};
