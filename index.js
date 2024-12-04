const express = require("express");
const ampq = require("amqplib");
const app = express();

const port = 3000;
app.use(express.json());

let connection, channel;

connectQueue();

async function connectQueue() {
  try {
    connection = await ampq.connect("amqp://localhost:5672");
    channel = await connection.createChannel();

    await channel.assertQueue("test-queue");
  } catch (error) {
    console.error(error.message);
  }
}

const sendInfo = async (data) => {
  await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));

  await channel.close();
  await connection.close();
};

app.get("/send-message", (req, res) => {
  const data = "Hi my name is Don!";
  sendInfo(data);
  console.log("Message send to queue!");

  res.send("Message sent successfully!");
});

app.listen(port, () => {
  console.log(`server listen to ${port}`);
});
