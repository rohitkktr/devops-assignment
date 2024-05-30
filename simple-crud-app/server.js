// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/simplecrud', { useNewUrlParser: true, useUnifiedTopology: true });

const Task = mongoose.model('Task', new mongoose.Schema({
    name: String,
    completed: Boolean
}));

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

app.put('/tasks/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ message: 'Task deleted' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
