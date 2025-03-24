//This program is used to receive message from consumer

const express = require("express");
const ampq = require("amqplib");
const app = express();

const port = 3001;
app.use(express.json());

let connection, channel;

connectQueue();

async function connectQueue() {
  try {
    connection = await ampq.connect("amqp://localhost:5672");
    channel = await connection.createChannel();

    await channel.assertQueue("test-queue");

    channel.consume("test-queue", (data) => {
      console.log("Data received : ", Buffer.from(data.content).toString());
      channel.ack(data);
    });
    console.log("Consumer connected to RabbitMQ!");
  } catch (error) {
    console.error(error.message);
  }
}

app.listen(port, () => {
  console.log(`Consumer server listen to port : ${port}`);
});
