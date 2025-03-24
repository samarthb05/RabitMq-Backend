RabbitMQ Message Queue Demo with Docker

This project demonstrates a basic RabbitMQ implementation with:
- A producer service that sends messages
- A consumer service that receives messages
- RabbitMQ server with management UI

Prerequisites
- Docker installed
- Docker Compose
- For Windows: WSL2 enabled 

Steps
1. Clone the repository
2. Install depedency: npm install
2. Run the following command:
   docker-compose up -d --build // to run docker image

3. Access the services:
   - RabbitMQ Management: http://localhost:15672
     Username: guest
     Password: guest

Services Details

- Producer Service :
- Endpoint: GET /send-message
- Port: 3000

- Consumer Service :
- Port: 3001

Useful Commands
- docker-compose up -d --build   Start all services
- docker-compose logs -f         View service logs
- docker-compose down            Stop services
- docker-compose down -v         Stop and remove volumes

Troubleshooting 

1. CONNECTION ISSUES:
   - Wait 30 seconds after startup for RabbitMQ to initialize
   - Check logs with docker-compose logs rabbitmq

2. PORT CONFLICTS:
   - Modify ports in docker-compose.yml if default ports are occupied

3. WINDOWS WSL ISSUES:
   - Ensure virtualization is enabled in BIOS
   - Update WSL with wsl --update