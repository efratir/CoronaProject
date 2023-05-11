const express = require("express")
const router = express.Router();
const MemberBL = require("../models/memberBL")

router.get("/", async (req, res) => {

    try {
        let data = await MemberBL.getMembers();
        res.status(200).json(data)
    }
    catch (error) { res.status(400).json({ message: error.message }) }
})


router.get("/:ID", async (req, res) => {
    try {
        let data = await MemberBL.getMember(req.params.ID)
        res.status(200).json(data)
    }
    catch (error) { res.status(400).json({ message: error.message }) }
})

router.post("/", async (req, res) => {
    try {
        let data = await MemberBL.addMember(req.body)
        console.log(data + " ---");
        res.status(200).json(data)
    }

    catch (error) { res.status(400).json({ message: error.message }) }
})

//קריאות שרת לפונקציות של השאילתות - בונוס
router.get('/activePatients', async (req, res) => {
    try {
        const count = await MemberBL.getActivePatientsLastMonth();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/unvaccinated', async (req, res) => {
    try {
      const count = await MemberBL.getUnvaccinatedMembers();
      res.status(200).json({ count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;