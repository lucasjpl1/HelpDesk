const express = require('express');
const Ticket = require('../models/Ticket');
const { authenticate, isAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticate, async (req, res) => {
    const { title, description, priority } = req.body;
    const ticket = new Ticket({ title, description, priority, createdBy: req.user._id });
    await ticket.save();
    res.send(ticket);
});

router.get('/', authenticate, async (req, res) => {
    const tickets = await Ticket.find().populate('createdBy', 'name email');
    res.send(tickets);
});

router.put('/:id', authenticate, isAdmin, async (req, res) => {
    const { id } = req.params;
    const { status, priority } = req.body;
    const ticket = await Ticket.findByIdAndUpdate(id, { status, priority }, { new: true });
    res.send(ticket);
});

module.exports = router;
